// src/routes/your-page/+page.server.ts
import { R2_PUBLIC_BUCKET_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const language = 'en';

export const load: PageServerLoad = async ({ platform }) => {
	if (!platform?.env.PODCASTS) {
		throw error(500, 'R2 binding not found');
	}

	try {
		// Use the list() method on your R2 binding
		const { objects } = await platform.env.PODCASTS.list({ prefix: `${language}/` });

		const objectsWithUrls = objects.map((obj) => {
			const firstBreak = obj.key.split('/');
			const secondBreak = firstBreak[1].split('-');

			return {
				language: firstBreak[0],
				date: new Date(
					`${secondBreak[2]}-${secondBreak[3]}-${secondBreak[4]}`
				).toLocaleDateString(),
				title: secondBreak[5].replace('.mp3', '').replace(/([a-z])([A-Z0-9])/g, '$1 $2'),
				key: obj.key,
				audio: `${R2_PUBLIC_BUCKET_URL}/${obj.key}`
			};
		});

		return {
			r2Objects: objectsWithUrls
		};
	} catch (err) {
		console.error('Error fetching R2 objects:', err);
		throw error(500, 'Could not retrieve bucket contents.');
	}
};
