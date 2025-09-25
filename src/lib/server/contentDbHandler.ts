import type { RequestEvent } from '@sveltejs/kit';
import * as CRUD from '$lib/server/CRUD';
import { fail } from '@sveltejs/kit';
import { dataBaseCheck } from '$lib/server/dataBaseCheck';

export async function setContent({ platform }: RequestEvent, content: App.Components) {
	if (!dataBaseCheck(platform)) return fail(500, { fail: true });
	try {
		const result = await CRUD.update(platform, content);
		return { success: true, ...result };
	} catch (err) {
		console.log(`Error from ${content.component_type}/${content.component_name} update: `, err);
		return fail(500, { fail: true });
	}
}
