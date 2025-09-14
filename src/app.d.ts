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
			created_at?: string | undefined;
			updated_at?: string | undefined;
			version?: number | undefined;
		};

		type Components = {
			_id?: string;
			component_type: string;
			component_name: string;
			content: string | any;
			created_at?: string | undefined;
			updated_at?: string | undefined;
			version?: number | undefined;
		};

		type Hero = {
			background_image_url: string;
			hero_icon_content: string;
			hero_title_content: string;
			sub_title_left: string;
			sub_title_right: string;
		};

		type CurrentSermonLink = {
			component_height: number;
			background_image_url: string;
			main_image: {
				href: string;
				url: string;
				alt: string;
			};
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
