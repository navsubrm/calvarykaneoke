export async function checkTableColumns(platform: App.Platform | undefined, tableName: string) {
	if (tableName == '_cf_METADATA') return;
	const columns = await platform?.env?.DB.prepare(`PRAGMA table_xinfo("${tableName}");`).all();
	const returnColumns = columns?.results.map((el) => ({ name: el.name, type: el.type }));

	console.log(`${tableName}: `, { name: tableName, columns: returnColumns });
}
