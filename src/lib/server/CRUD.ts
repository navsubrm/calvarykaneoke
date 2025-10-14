const tableName = 'pages';
type Content = App.Components;

export async function update(platform: App.Platform | undefined, content: App.Pages) {
	const item: Content | undefined = await queryNewestRecordByPage(
		platform,
		content.name,
		content.language
	);

	const created_at = item?.created_at || new Date().toISOString();
	const updated_at = new Date().toISOString();
	const version = (item?.version as number) + 1 || 1;

	try {
		const result = await platform?.env?.DB?.prepare(
			`
        INSERT INTO ${tableName} 
            (_id, 
			name,
			route,
			type, 
			language,
			content,
			meta_data,
			created_at, 
			updated_at, 
			version) 
        VALUES (?1,?2,?3,?4,?5,?6,?7, ?8, ?9, ?10)`
		)
			.bind(
				crypto.randomUUID(),
				content.name,
				content.route,
				content.type,
				content.language,
				content.content,
				content.meta_data,
				created_at,
				updated_at,
				version
			)
			.run();

		//console.log('Result from post: ', result);

		return result;
	} catch (err) {
		console.log('Component update err: ', err);
		return { fail: true };
	}
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
	name: string,
	language: string = 'en'
) {
	const newest = await platform?.env?.DB.prepare(
		`
		SELECT * 
		FROM ${tableName} 
		WHERE 
			name = "${name}" 
			AND 
			language = "${language}"
		ORDER BY updated_at DESC 
		LIMIT 1`
	).run();

	if (newest?.success && newest?.results?.length == 0 && language !== 'en')
		return queryNewestRecordByPage(platform, name, 'en');

	if (!newest || !newest.success || newest?.results.length == 0) return undefined;

	return newest?.results[0] as Content;
}
