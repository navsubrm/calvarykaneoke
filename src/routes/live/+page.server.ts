import { type Actions, type RequestEvent } from '@sveltejs/kit';
import * as Page from '$lib/server/pageCRUD.js';
import * as CRUD from '$lib/server/CRUD.js';
import { setDataContent as setLiveStream } from '$lib/components/LivestreamPlayer/utils/dbActions';
import { setDataContent as setSocialFooter } from '$lib/components/SocialFooter/utils/dbActions.js';

export async function load({ platform }) {
	const page = await Page.queryNewestRecordByPage(platform, '/');

	return {
		page,
		liveStream: await CRUD.queryNewestRecordByPage(platform, 'Livestream Main'),
		socialFooter: await CRUD.queryNewestRecordByPage(platform, 'Social Footer')
	};
}

export const actions: Actions = {
	'set-livestream': async ({ platform, request }: RequestEvent) =>
		await setLiveStream({ platform, request } as RequestEvent),
	'set-social-footer': async ({ platform, request }: RequestEvent) =>
		await setSocialFooter({ platform, request } as RequestEvent)
};
