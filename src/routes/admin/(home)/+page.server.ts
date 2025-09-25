import { fail } from '@sveltejs/kit';
import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD.js';
import isJson from '$lib/config/isJson.js';

export async function load({ platform }) {
	return {
		page: await CRUD.queryNewestRecordByPage(platform, 'home')
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
		route: formData.route.toString(),
		type: formData.type.toString(),
		language: JSON.parse(formData.language.toString()).value,
		content: JSON.stringify({
			hero: {
				background_image_url: formData?.hero_background_image_url.toString() || '',
				hero_icon_content: formData?.hero_icon_content.toString(),
				hero_title_content: formData?.hero_title_content.toString(),
				sub_title_left: formData?.hero_sub_title_left.toString(),
				sub_title_right: formData?.hero_sub_title_right.toString()
			},
			large_image: {
				component_height: Number(formData?.large_image_component_height || 0),
				main_image: {
					href: formData?.large_image_main_image_href.toString(),
					url: formData?.large_image_main_image_url.toString(),
					alt: formData?.large_image_main_image_alt.toString()
				}
			},
			dual_content: {
				component_height: Number(formData?.dual_content_component_height || 0),
				background_color: isJson(formData?.dual_content_background_color.toString())
					? JSON.parse(formData?.dual_content_background_color.toString())?.value
					: '',
				background_image_url: formData?.dual_content_background_image_url.toString(),
				wide_content: formData?.dual_content_wide_content.toString(),
				narrow_content: formData?.dual_content_narrow_content.toString()
			},
			tri_image: {
				background_upper_color: isJson(formData?.tri_image_background_upper_color.toString())
					? JSON.parse(formData?.tri_image_background_upper_color.toString())?.value
					: '',
				background_lower_color: isJson(formData?.tri_image_background_lower_color.toString())
					? JSON.parse(formData?.tri_image_background_lower_color.toString())?.value
					: '',
				primary_content: {
					link: {
						href: formData?.tri_image_primary_link_href.toString(),
						label: formData?.tri_image_primary_link_label.toString(),
						alt: formData?.tri_image_primary_link_alt.toString()
					},
					image: {
						src: formData?.tri_image_primary_image_src.toString()
					}
				},
				aside_content: [
					{
						image: {
							src: formData?.tri_image_aside_upper_image_url.toString()
						},
						content: formData?.tri_image_aside_upper_content.toString(),
						link: {
							href: formData?.tri_image_aside_upper_link_href.toString(),
							label: formData?.tri_image_aside_upper_link_label.toString(),
							alt: formData?.tri_image_aside_upper_link_alt.toString()
						}
					},
					{
						image: {
							src: formData?.tri_image_aside_lower_image_url.toString()
						},
						content: formData?.tri_image_aside_lower_content.toString(),
						link: {
							href: formData?.tri_image_aside_lower_link_href.toString(),
							label: formData?.tri_image_aside_lower_link_label.toString(),
							alt: formData?.tri_image_aside_lower_link_alt.toString()
						}
					}
				]
			}
		}),
		meta_data: JSON.stringify({
			title: formData?.name.toString().charAt(0).toUpperCase() + formData?.name.slice(1)
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
