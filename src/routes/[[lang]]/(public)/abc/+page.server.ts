import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as Page from '$lib/server/pageCRUD.js';
import * as CRUD from '$lib/server/CRUD.js';
import { setDataContent as setABCsContent } from './utils/dbActions';
import { setDataContent as setSocialFooter } from '$lib/components/SocialFooter/utils/dbActions.js';

export async function load({ platform }) {
	const page = await Page.queryNewestRecordByPage(platform, '/');

	return {
		page,
		pageContent: await CRUD.queryNewestRecordByPage(platform, 'ABCs of Salvation'),
		socialFooter: await CRUD.queryNewestRecordByPage(platform, 'ABCs Social Footer')
	};
}

export const actions: Actions = {
	'set-abc-content': async ({ platform, request }: RequestEvent) =>
		await setABCsContent({ platform, request } as RequestEvent),
	'set-social-footer': async ({ platform, request }: RequestEvent) =>
		await setSocialFooter({ platform, request } as RequestEvent)
};
