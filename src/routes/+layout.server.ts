import links from '$lib/config/LinkStore';
import footer from '$lib/components/Footer/utils/testData';
// import { dataBaseCheck } from '$lib/server/dataBaseCheck.js';
// import { IS_DEV } from '$env/static/private';
// import { checkTables } from '$lib/server/checkTables.js';
// import { checkTableColumns } from '$lib/server/checkTableColumns.js';
//import * as Page from '$lib/server/pageCRUD.js';

export async function load({ platform }) {
	// if (IS_DEV) {
	// 	if (!dataBaseCheck(platform)) return console.error('DB CONNECT NOT FOUND.');
	// 	const tables = await checkTables(platform);
	// 	console.log(`Tables: ${tables?.results?.map((el) => el.name).join(', ')}`);
	// 	tables?.results?.forEach(async (table: any) => await checkTableColumns(platform, table.name));
	// }

	// const page: App.Page = {
	// 	name: 'Home',
	// 	route: '/',
	// 	page_content: ['Hero-|-hero1'],
	// 	meta_data: {
	// 		title: 'Calvary Kaneohe | Home'
	// 	}
	// };

	// await Page.update(platform, page);

	return { links, footer };
}
