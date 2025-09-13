// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type Page = {
			_id?: string;
			name: string;
			route: string;
			page_content: unknown;
			meta_data: unknown;
			created_at: string | undefined;
			updated_at: string | undefined;
			version: number | undefined;
		};

		type Hero = {
			_id?: string;
			page: string;
			page_index: number;
			background_image_url: string;
			hero_icon_content: string;
			hero_title_content: string;
			sub_title_left: string;
			sub_title_right: string;
			created_at: string | undefined;
			updated_at: string | undefined;
			version: number | undefined;
		};

		interface Platform {
			env: {
				DB: D1Database;
				TEMPLATE: string;
				IS_DEV: boolean;
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
