import { fail } from '@sveltejs/kit';
import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD.js';
import { handleSocialFollowLinksFromForm } from '$lib/components/SocialLargeFollow/utils/handleSocialFollowLinksFromForm.js';

export async function load({ platform }) {
	return {
		page: await CRUD.queryNewestRecordByPage(platform, 'translations')
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
			max_width: Number(formData?.max_width),
			background: {
				upper: JSON.parse(formData?.background_upper.toString())?.value,
				base: JSON.parse(formData?.background_base.toString())?.value,
				lower: JSON.parse(formData?.background_lower.toString())?.value
			},
			content: {
				upper: formData?.content_upper.toString(),
				lower: formData?.content_lower.toString()
			},
			button: {
				label: formData?.button_label.toString(),
				href: formData?.button_href.toString()
			},
			social_follow_large: {
				main: {
					size: Number(formData?.social_follow_large_main_size),
					brightness: Number(formData?.social_follow_large_main_brightness),
					grey_scale: Number(formData?.social_follow_large_main_grey_scale)
				},
				social_links: [...handleSocialFollowLinksFromForm(formData)]
			}
		}),
		meta_data: JSON.stringify({
			title: formData?.meta_data_title.toString()
		})
	};

	try {
		const result = await CRUD.update(platform, pageData);

		console.log('Result from about: ', result);

		return { success: true, ...result };
	} catch (err) {
		console.log(`Error from : `, err);
		return fail(500, { fail: true });
	}
}
