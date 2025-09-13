const tableName = 'pages';

export async function update(platform: App.Platform | undefined, content: App.Page) {
	/**
	 * ! I feel like I need to think harder on this and check for duplicates in some way.
	 */

	const item: App.Page | undefined = await queryNewestRecordByPage(platform, content.route);

	const created_at = item?.created_at || new Date().toISOString();
	const updated_at = new Date().toISOString();
	const version = (item?.version as number) + 1 || 1;

	const result = await platform?.env.DB.prepare(
		`INSERT INTO ${tableName} (_id, name, route, page_content, meta_data, created_at, updated_at, version) VALUES (?1,?2,?3,?4,?5,?6,?7,?8)`
	)
		.bind(
			crypto.randomUUID(),
			content.name,
			content.route,
			JSON.stringify(content.page_content),
			JSON.stringify(content.meta_data),
			created_at,
			updated_at,
			version
		)
		.run();

	return result;
}

export async function queryById(platform: App.Platform | undefined, id: string) {
	return await platform?.env?.DB.prepare(`SELECT * FROM ${tableName} WHERE _id = '${id}'`).run();
}

export async function queryAll(platform: App.Platform | undefined) {
	return await platform?.env?.DB?.prepare(`SELECT * FROM ${tableName}`).run();
}

export async function queryByLimit(platform: App.Platform | undefined, limit: number) {
	return await platform?.env?.DB?.prepare(`SELECT * FROM ${tableName} LIMIT ${limit}`).run();
}

export async function queryNewestRecordByPage(platform: App.Platform | undefined, route: string) {
	const newest = await platform?.env?.DB.prepare(
		`SELECT * FROM ${tableName} WHERE route = "${route}" ORDER BY updated_at DESC LIMIT 1`
	).run();

	if (!newest || !newest.success || newest?.results.length == 0) return undefined;

	return newest?.results[0] as App.Page;
}
