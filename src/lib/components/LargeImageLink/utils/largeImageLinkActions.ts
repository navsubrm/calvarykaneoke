import type { RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD';
import { fail } from '@sveltejs/kit';
import { dataBaseCheck } from '$lib/server/dataBaseCheck';
import type { LargeImageLinkForm } from './prop.types';
type FormData = LargeImageLinkForm;

export async function setLargeLinkFormDataContent({ platform, request }: RequestEvent) {
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
			main_image: {
				href: formData?.main_image_href.toString(),
				url: formData?.main_image_url.toString(),
				alt: formData?.main_image_alt.toString()
			}
		})
	};

	return componentDBDataObject;
}
