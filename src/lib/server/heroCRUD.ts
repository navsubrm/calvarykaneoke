const tableName = 'hero';

export async function update(platform: App.Platform | undefined, content: App.Hero) {
	const item: App.Hero | undefined = await queryNewestRecordByPage(platform, content.page);

	const created_at = item?.created_at || new Date().toISOString();
	const updated_at = new Date().toISOString();
	const version = (item?.version as number) + 1 || 1;

	const result = platform?.env?.DB?.prepare(
		`
        INSERT INTO hero 
            (_id, 
			page, 
			page_index, 
			background_image_url, 
			hero_icon_content, 
			hero_title_content, 
			sub_title_left, 
			sub_title_right, 
			created_at, 
			updated_at, 
			version) 
        VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11)`
	)
		.bind(
			crypto.randomUUID(),
			content.page,
			content.page_index,
			content.background_image_url,
			content.hero_icon_content,
			content.hero_title_content,
			content.sub_title_left,
			content.sub_title_right,
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

export async function queryNewestRecordByPage(
	platform: App.Platform | undefined,
	pageName: string
) {
	const newest = await platform?.env?.DB.prepare(
		`SELECT * FROM ${tableName} WHERE page = "${pageName}" ORDER BY updated_at DESC LIMIT 1`
	).run();

	if (!newest || !newest.success || newest?.results.length == 0) return undefined;

	return newest?.results[0] as App.Hero;
}
