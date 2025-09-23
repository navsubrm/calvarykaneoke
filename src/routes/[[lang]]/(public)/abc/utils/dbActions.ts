import type { RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD';
import { fail } from '@sveltejs/kit';
import { dataBaseCheck } from '$lib/server/dataBaseCheck';
import type { FormData } from './props.types';

export async function setDataContent({ platform, request }: RequestEvent) {
	if (!dataBaseCheck(platform)) return fail(500, { fail: true });
	const data = Object.fromEntries(await request.formData());
	const content = formDataConversion(data as FormData);

	try {
		const result = await CRUD.update(platform, content);
		return { success: true, ...result };
	} catch (err) {
		console.log('Error from update-large-image-link action: ', err);
		return fail(500, { fail: true });
	}
}

export function formDataConversion(formData: FormData) {
	const componentDBDataObject: App.Components = {
		component_type: formData.component_type.toString(),
		component_name: formData.component_name.toString(),
		content: JSON.stringify({
			component_height: Number(formData?.component_height),
			background_image: {
				url: formData?.background_image_url.toString()
			},
			background_color: JSON.parse(formData?.background_color.toString())?.value,
			gradient_upper: JSON.parse(formData?.gradient_upper.toString())?.value,
			gradient_middle: JSON.parse(formData?.gradient_middle.toString())?.value,
			gradient_lower: JSON.parse(formData?.gradient_lower.toString())?.value,
			upper_content: formData?.upper_content.toString(),
			video: {
				src: formData?.video_src.toString(),
				footer: {
					url: formData?.video_footer_url.toString(),
					text: formData?.video_footer_text.toString()
				}
			},
			lower_content: formData?.lower_content.toString(),
			abc: {
				a: formData?.abc_a.toString(),
				b: formData?.abc_b.toString(),
				c: formData?.abc_c.toString()
			}
		})
	};

	return componentDBDataObject;
}
