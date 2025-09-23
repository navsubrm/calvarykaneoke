import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as Page from '$lib/server/pageCRUD.js';
import * as CRUD from '$lib/server/CRUD.js';
import { setHeroContent } from '$lib/components/Hero/utils/dbActions.js';
import { setLargeLinkFormDataContent } from '$lib/components/LargeImageLink/utils/dbActions.js';
import { setWideSpacedContent } from '$lib/components/WideSpacedContent/utils/dbActions.js';
import { setTriPictureContent } from '$lib/components/TriPicture/utils/dbActions.js';

export async function load({ platform }) {
	const page = await Page.queryNewestRecordByPage(platform, '/');

	return {
		page,
		hero: await CRUD.queryNewestRecordByPage(platform, 'hero1'),
		largeImageLink: await CRUD.queryNewestRecordByPage(platform, 'Current Sermon Link'),
		wideContent: await CRUD.queryNewestRecordByPage(platform, 'Dual Content Block'),
		triPicture: await CRUD.queryNewestRecordByPage(platform, 'About JD')
	};
}

export const actions: Actions = {
	'set-hero': async ({ platform, request }: RequestEvent) =>
		await setHeroContent({ platform, request } as RequestEvent),
	'update-large-image-link': async ({ platform, request }) =>
		await setLargeLinkFormDataContent({ platform, request } as RequestEvent),
	'update-wide-spaced-content': async ({ platform, request }) =>
		await setWideSpacedContent({ platform, request } as RequestEvent),
	'update-tri-picture-content': async ({ platform, request }) =>
		await setTriPictureContent({ platform, request } as RequestEvent)
};

// const home: App.Page = {
// 	name: 'Home',
// 	route: '/',
// 	page_content: ['Hero-|-hero1'],
// 	meta_data: {
// 		title: 'Calvary Kaneohe | Home'
// 	}
// };

//if (!page) await Page.update(platform, home);
