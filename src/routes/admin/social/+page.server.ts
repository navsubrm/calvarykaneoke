import { fail } from '@sveltejs/kit';
import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD.js';

export async function load({ platform }) {
	return {
		page: await CRUD.queryNewestRecordByPage(platform, 'about')
	};
}

export const actions: Actions = {
	'set-page-content': async ({ platform, request }: RequestEvent) => {
		await setContent({ platform, request } as RequestEvent);
	}
};

async function setContent({ platform, request }: RequestEvent) {
	const formData = Object.fromEntries(await request.formData());

	const pageData: App.Pages = {
		name: formData.name.toString(),
		type: formData.type.toString(),
		route: formData.route.toString(),
		language: JSON.parse(formData.language.toString())?.value,
		content: JSON.stringify({
			component_height: Number(formData?.component_height),
			background: {
				upper: JSON.parse(formData?.background_upper.toString())?.value,
				base: JSON.parse(formData?.background_base.toString())?.value,
				lower: JSON.parse(formData?.background_lower.toString())?.value
			},
			about_main: {
				component_height: Number(formData?.about_main_component_height),
				src: formData?.about_main_src.toString(),
				content: formData?.about_main_content.toString()
			},
			about_image: {
				title: formData?.about_image_title.toString(),
				content: formData?.about_image_content.toString(),
				image: {
					src: formData?.about_image_image_src.toString(),
					alt: formData?.about_image_image_alt.toString()
				}
			},
			about_church: {
				title: formData?.about_church_title.toString(),
				content: formData?.about_church_content.toString(),
				image: {
					src: formData?.about_church_image_src.toString(),
					alt: formData?.about_church_image_alt.toString()
				}
			},
			lower_content: formData?.lower_content.toString(),
			social_footer: {
				component_height: Number(formData?.social_footer_component_height),
				background_color: JSON.parse(formData?.social_footer_background_color.toString()).value,
				x_post_text: formData?.social_footer_x_post_text.toString(),
				facebook_share_link: formData?.social_footer_facebook_share_link.toString(),
				mail_to: {
					subject: formData?.social_footer_mail_to_subject.toString(),
					body: formData?.social_footer_mail_to_body.toString()
				}
			}
		}),
		meta_data: JSON.stringify({
			title: formData?.meta_data_title.toString()
		})
	};

	console.dir(pageData, 5);

	try {
		const result = await CRUD.update(platform, pageData);

		console.log('Result from about: ', result);

		return { success: true, ...result };
	} catch (err) {
		console.log(`Error from : `, err);
		return fail(500, { fail: true });
	}
}
