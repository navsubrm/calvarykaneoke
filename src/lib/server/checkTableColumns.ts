export async function checkTableColumns(platform: App.Platform | undefined, tableName: string) {
	const columns = await platform?.env?.DB.prepare(`PRAGMA table_xinfo("${tableName}");`).all();

	console.log('Columns: ', columns);
	return { name: tableName, columns };
}
