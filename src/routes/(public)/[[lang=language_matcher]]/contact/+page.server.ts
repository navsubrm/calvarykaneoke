import { fail } from '@sveltejs/kit';
import contactFormServerActions from '$lib/server/contactFormServerActions';
import * as CRUD from '$lib/server/CRUD.js';

const dev = true;

export async function load({ platform, url }) {
	const mode = url.searchParams.get('mode');
	const id = url.searchParams.get('edit-id');

	return {
		editor: { mode, id },
		page: await CRUD.queryNewestRecordByPage(platform, 'contact')
	};
}

export const actions = {
	contact: async ({ request }) => {
		if (dev) {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			return {
				nameMissing: true,
				emailMissing: true,
				messageMissing: true,
				//fail: true
				success: true
			};
		}

		const result = await contactFormServerActions(request);

		if (result.status == 200) return { ...result.details };

		return fail(result.status, { ...result.details });
	}
};
