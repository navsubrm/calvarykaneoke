import Layout from '$lib/config/dataModels/Layout';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

// Import your language matcher to use its list of supported languages
import { match } from '$params/language_matcher';

export const load: LayoutServerLoad = async ({ platform, params, cookies, request, url }) => {
	if (url.searchParams.get('mode') == 'edit')
		return { links: Layout.links, header: Layout.header, footer: Layout.footer };

	// If the language param is missing
	if (!params.lang) {
		let languagePreference: string;

		// 1. Check for an existing language preference cookie
		const cookieLang = cookies.get('language-preference');
		if (cookieLang && match(cookieLang)) {
			languagePreference = cookieLang;
		}
		// 2. If no cookie, check the Accept-Language header
		else {
			const acceptLanguageHeader = request.headers.get('Accept-Language');
			const userLang = acceptLanguageHeader
				? acceptLanguageHeader.split(',')[0].split('-')[0]
				: 'en';

			// Use the match function to validate against supported languages
			if (match(userLang)) {
				languagePreference = userLang;
			} else {
				languagePreference = 'en'; // Default fallback
			}
		}

		// Set the language preference cookie for future visits
		cookies.set('language-preference', languagePreference, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: platform.env.NODE_ENV === 'production', // Use secure in production
			maxAge: 60 * 60 * 24 * 365 // 1 year
		});

		// Construct the new URL with the language param and redirect
		const newPath = `/${languagePreference}${url.pathname}`;
		redirect(307, newPath);
	}

	// If a language param exists, set the cookie and continue
	cookies.set('language-preference', params.lang, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: platform.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 365
	});

	// Return your layout data as normal
	return { links: Layout.links, header: Layout.header, footer: Layout.footer };
};
