// src/params/lang_matcher.ts
//import { error } from '@sveltejs/kit';
import type { ParamMatcher } from '@sveltejs/kit';
import LANGUAGES from '$lib/config/availableLanguages';

export const match = ((param): param is (typeof LANGUAGES)[number] => {
	// Check if the provided `param` is one of the allowed language codes
	return LANGUAGES.includes(param as (typeof LANGUAGES)[number]);

	// if (!validation) return error(404, 'Language not supported');

	// return validation;
}) satisfies ParamMatcher;
