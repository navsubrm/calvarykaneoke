import Layout from '$lib/config/dataModels/Layout';
import { match } from '$params/language_matcher';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, url, cookies, platform }) => {
	if (url.searchParams.get('mode') == 'edit')
		return { links: Layout.links, header: Layout.header, footer: Layout.footer };
	if (url.pathname.startsWith('/admin')) return;

	let cookieLang = cookies.get('language-preference');

	if (!cookieLang || !match(cookieLang)) {
		setLangCookie('en', cookies, platform);
		cookieLang = 'en';
	}

	if (!params.lang && !url.pathname.match(/\/[a-z]{2,2}\//)) {
		return redirect(302, `${cookieLang}${url.pathname}`);
	}

	return { links: Layout.links, header: Layout.header, footer: Layout.footer };
};

function setLangCookie(lang: string, cookies: any, platform: App.Platform | undefined) {
	cookies.set('language-preference', lang as string, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: platform?.env?.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 365
	});
}
