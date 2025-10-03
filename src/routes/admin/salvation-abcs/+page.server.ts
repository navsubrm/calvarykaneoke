import { fail } from '@sveltejs/kit';
import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD.js';

export async function load({ platform }) {
	return {
		page: await CRUD.queryNewestRecordByPage(platform, 'abc')
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
			background_color: JSON.parse(formData?.background_color.toString())?.value,
			gradient_upper: JSON.parse(formData?.gradient_upper.toString())?.value,
			gradient_middle: JSON.parse(formData?.gradient_middle.toString())?.value,
			gradient_lower: JSON.parse(formData?.gradient_lower.toString())?.value,
			background_image: {
				url: formData?.background_image_url?.toString()
			},
			upper_content: formData?.upper_content.toString(),
			video: {
				title: formData?.video_title.toString(),
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
