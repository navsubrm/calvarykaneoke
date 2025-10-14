// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type Pages = {
			_id?: string;
			name: string;
			route: string;
			type: string;
			language: string;
			content: string | unknown;
			meta_data: string | undefined;
			created_at?: string | undefined;
			updated_at?: string | undefined;
			version?: number | undefined;
		};

		type Components = {
			_id?: string;
			component_type: string;
			component_name: string;
			component_language: string;
			content: string | unknown;
			created_at?: string | undefined;
			updated_at?: string | undefined;
			version?: number | undefined;
		};

		interface FormData {
			[key: string]: FormDataEntryValue;
		}

		interface Platform {
			env: {
				DB: D1Database;
				TEMPLATE: string;
				IS_DEV: boolean;
				ASSETS: Fetcher;
				NODE_ENV: string;
			};
			cf: CfProperties;
			ctx: ExecutionContext;
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}

	// Google Translate import declaration (see layout)
	declare namespace google {
		namespace translate {
			/**
			 * Options for the Google Translate element.
			 */
			interface TranslateElementOptions {
				pageLanguage?: string;
				includedLanguages?: string;
				layout?: number;
				autoDisplay?: boolean;
			}

			/**
			 * Represents the Google Translate element.
			 * @param options Configuration options for the element.
			 * @param elementId The ID of the DOM element where the translator should be rendered.
			 */
			class TranslateElement {
				constructor(options: TranslateElementOptions, elementId: string);
			}

			/**
			 * Layout options for the Google Translate element.
			 */
			enum TranslateElement {
				InlineLayout,
				FloatPosition
			}
		}
	}

	// The callback function defined in the script's `cb` parameter is also a global variable.
	declare function googleTranslateElementInit(): void;
}

export {};
