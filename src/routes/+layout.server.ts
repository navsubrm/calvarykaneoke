import links from '$lib/config/LinkStore';
import { IS_DEV } from '$env/static/private';
import { checkTables } from '$lib/server/checkTables.js';
import { dataBaseCheck } from '$lib/server/dataBaseCheck.js';
import { checkTableColumns } from '$lib/server/checkTableColumns.js';

export async function load({ platform }) {
	if (dataBaseCheck(platform)) return console.error('DB CONNECT NOT FOUND.');
	if (IS_DEV) {
		const tables = await checkTables(platform);

		tables?.results?.map(async (table: any) => {
			const columns = await checkTableColumns(platform, table.name);
			return columns;
		});

		//const initString = `You are in DEV mode using ${tables.meta.served_by} with the following tables, ' ${tables.results.map((el) => el.name).join(', ')}`;

		console.log(`Tables: ${tables?.results?.map((el) => el.name).join(', ')}`);
		return { links };
	}
}
