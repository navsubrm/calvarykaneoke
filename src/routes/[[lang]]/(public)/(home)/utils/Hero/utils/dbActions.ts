import type { RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD';
import { fail } from '@sveltejs/kit';
import { dataBaseCheck } from '$lib/server/dataBaseCheck';
import type { heroForm } from './props.types';
type FormData = heroForm;

export async function setHeroContent({ platform, request }: RequestEvent) {
	if (!dataBaseCheck(platform)) return fail(500, { fail: true });
	const data = Object.fromEntries(await request.formData());
	const content = formDataConversion(data as FormData);

	try {
		const result = await CRUD.update(platform, content);
		return { success: true, ...result };
	} catch (err) {
		console.log('Error from update-hero action: ', err);
		return fail(500, { fail: true });
	}
}

export function formDataConversion(formData: FormData) {
	const componentDBDataObject: App.Components = {
		component_type: formData.component_type.toString(),
		component_name: formData.component_name.toString(),
		content: JSON.stringify({
			background_image_url: formData.background_image_url.toString(),
			hero_icon_content: formData.hero_icon_content.toString(),
			hero_title_content: formData.hero_title_content.toString(),
			sub_title_left: formData.sub_title_left.toString(),
			sub_title_right: formData.sub_title_right.toString()
		})
	};

	return componentDBDataObject;
}
