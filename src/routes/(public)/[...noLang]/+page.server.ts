import { error } from '@sveltejs/kit';
import { match } from '$params/language_matcher.js';

export async function load({ params }) {
	if (!match(params.noLang.substring(0, 2))) return error(404, 'Language Not Supported.');

	return error(404, 'Route Not Found.');
}
