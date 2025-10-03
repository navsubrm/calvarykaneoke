import * as CRUD from '$lib/server/CRUD.js';

export async function load({ platform, url }) {
	const mode = url.searchParams.get('mode');
	const id = url.searchParams.get('edit-id');

	return {
		editor: { mode, id },
		page: await CRUD.queryNewestRecordByPage(platform, 'live')
	};
}
