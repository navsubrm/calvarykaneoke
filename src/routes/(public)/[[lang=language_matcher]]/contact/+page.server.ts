import { fail } from '@sveltejs/kit';
import contactFormServerActions from '$lib/server/contactFormServerActions';

const dev = true;

export const actions = {
	contact: async ({ request }) => {
		if (dev) {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			return {
				nameMissing: true,
				emailMissing: true,
				messageMissing: true,
				fail: true
				//success: true,
			};
		}

		const result = await contactFormServerActions(request);

		if (result.status == 200) return { ...result.details };

		return fail(result.status, { ...result.details });
	}
};
