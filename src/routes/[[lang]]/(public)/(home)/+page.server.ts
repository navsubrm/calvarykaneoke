import * as CRUD from '$lib/server/CRUD.js';

export async function load({ platform }) {
	return {
		page: await CRUD.queryNewestRecordByPage(platform, 'home')
	};
}
