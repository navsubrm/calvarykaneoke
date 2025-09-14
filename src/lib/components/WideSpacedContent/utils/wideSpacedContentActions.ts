import type { RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD';
import { fail } from '@sveltejs/kit';
import { dataBaseCheck } from '$lib/server/dataBaseCheck';
import type { WideSpacedContentForm } from './props.types';
type FormData = WideSpacedContentForm;

export async function setWideSpacedContent({ platform, request }: RequestEvent) {
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
			background_color: JSON.parse(formData?.background_color.toString()).value,
			background_image_url: formData?.background_image_url.toString(),
			wide_content: formData?.wide_content.toString(),
			narrow_content: formData?.narrow_content.toString()
		})
	};

	return componentDBDataObject;
}
