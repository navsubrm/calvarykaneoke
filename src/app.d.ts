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
			};
			cf: CfProperties;
			ctx: ExecutionContext;
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
