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
	const streamEntries = [];
	for (let i = 0; i < Number(formData.stream_count); i++) {
		streamEntries.push({
			title: formData[`streams_title_${i}`],
			src: formData[`streams_src_${i}`]
		});
	}

	const componentDBDataObject: App.Components = {
		component_type: formData.component_type.toString(),
		component_name: formData.component_name.toString(),
		content: JSON.stringify({
			component_height: Number(formData?.component_height),
			background_color: {
				base: JSON.parse(formData?.background_color_base.toString())?.value,
				upper: JSON.parse(formData?.background_color_upper.toString())?.value,
				lower: JSON.parse(formData?.background_color_lower.toString())?.value
			},
			general_content: {
				upper: formData?.general_content_upper.toString(),
				middle: formData?.general_content_middle.toString(),
				lower: formData?.general_content_lower.toString()
			},
			button: {
				label: formData?.button_label.toString(),
				href: formData?.button_href.toString()
			}
		})
	};

	return componentDBDataObject;
}
