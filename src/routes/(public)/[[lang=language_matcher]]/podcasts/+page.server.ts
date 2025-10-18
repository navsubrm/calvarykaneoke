// src/routes/your-page/+page.server.ts
import { R2_PUBLIC_BUCKET_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	if (!platform?.env.PODCASTS) {
		throw error(500, 'R2 binding not found');
	}

	try {
		// Use the list() method on your R2 binding
		const { objects } = await platform.env.PODCASTS.list();

		const objectsWithUrls = objects.map((obj) => ({
			key: obj.key,
			url: `${R2_PUBLIC_BUCKET_URL}/${obj.key}`
		}));

		return {
			r2Objects: objectsWithUrls
		};
	} catch (err) {
		console.error('Error fetching R2 objects:', err);
		throw error(500, 'Could not retrieve bucket contents.');
	}
};
