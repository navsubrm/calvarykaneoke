import { fail } from '@sveltejs/kit';
import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD.js';

export async function load({ platform }) {
	return {
		page: await CRUD.queryNewestRecordByPage(platform, 'exemption')
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
		language: JSON.parse(formData.language.toString()).value,
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
			},
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

	try {
		const result = await CRUD.update(platform, pageData);
		return { success: true, ...result };
	} catch (err) {
		console.log(`Error from : `, err);
		return fail(500, { fail: true });
	}
}
