import type { RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD';
import { fail } from '@sveltejs/kit';
import { dataBaseCheck } from '$lib/server/dataBaseCheck';
import type { TriPictureContentForm } from './props.types';
type FormData = TriPictureContentForm;

export async function setTriPictureContent({ platform, request }: RequestEvent) {
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
			background_upper_color: JSON.parse(formData?.background_upper_color.toString()).value,
			background_lower_color: JSON.parse(formData?.background_lower_color.toString()).value,
			primary_content: {
				link: {
					href: formData?.primary_link_href.toString(),
					label: formData?.primary_link_label.toString(),
					alt: formData?.primary_link_alt.toString()
				},
				image: {
					src: formData?.primary_image_src.toString()
				}
			},
			aside_content: [
				{
					image: {
						src: formData?.aside_upper_image_url.toString()
					},
					content: formData?.aside_upper_content.toString(),
					link: {
						href: formData?.aside_upper_link_href.toString(),
						label: formData?.aside_upper_link_label.toString(),
						alt: formData?.aside_upper_link_alt.toString()
					}
				},
				{
					image: {
						src: formData?.aside_lower_image_url.toString()
					},
					content: formData?.aside_lower_content.toString(),
					link: {
						href: formData?.aside_lower_link_href.toString(),
						label: formData?.aside_lower_link_label.toString(),
						alt: formData?.aside_lower_link_alt.toString()
					}
				}
			]
		})
	};

	return componentDBDataObject;
}
