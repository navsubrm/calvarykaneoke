import links from '$lib/config/LinkStore';
import { dataBaseCheck } from '$lib/server/dataBaseCheck.js';
import { IS_DEV } from '$env/static/private';
import { checkTables } from '$lib/server/checkTables.js';
import { checkTableColumns } from '$lib/server/checkTableColumns.js';

export async function load({ platform }) {
	if (!dataBaseCheck(platform)) return console.error('DB CONNECT NOT FOUND.');
	if (IS_DEV) {
		const tables = await checkTables(platform);
		//console.log(`Tables: ${tables?.results?.map((el) => el.name).join(', ')}`);
		tables?.results?.forEach(async (table: any) => await checkTableColumns(platform, table.name));
	}

	return { links };
}

//import * as Hero from '$lib/server/heroCRUD.js';

/**
	 * ? const content: App.Hero = {
	    page: 'home',
		page_index: 0,
		background_image_url: '/images/hero-bg.webp',
		hero_icon_content: 'JD FARAG',
		hero_title_content: 'Bible Prophecy Updates',
		sub_title_left:
			'{\"styled\":{\"ops\":[{\"insert\":\"Go to \"},{\"attributes\":{\"link\":\"/livestream\"},\"insert\":\"Livestream\"},{\"insert\":\" Page\\n\"}]},\"html\":\"<p>Go&nbsp;to&nbsp;<a href=\\\"/livestream\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\">Livestream</a>&nbsp;Page</p>\"}',
		sub_title_right:
			'{\"styled\":{\"ops\":[{\"insert\":\"View \"},{\"attributes\":{\"link\":\"/prophecy-videos\"},\"insert\":\"Bible Prophecy Videos\"},{\"insert\":\"\\n\"}]},\"html\":\"<p>View&nbsp;<a href=\\\"/prophecy-videos\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\">Bible&nbsp;Prophecy&nbsp;Videos</a></p>\"}'
	};

	*/

// await Hero.update(platform, content);
