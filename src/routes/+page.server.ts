import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as Page from '$lib/server/pageCRUD.js';
import * as CRUD from '$lib/server/CRUD.js';
import { setHeroContent } from '$lib/components/Hero/utils/heroActions.js';
import { setLargeLinkFormDataContent } from '$lib/components/LargeImageLink/utils/largeImageLinkActions.js';
import { setWideSpacedContent } from '$lib/components/WideSpacedContent/utils/wideSpacedContentActions.js';
import { setTriPictureContent } from '$lib/components/TriPicture/utils/triPictureActions.js';

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
