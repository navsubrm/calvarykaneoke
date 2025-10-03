interface newInstance {
	name: string;
	route: string;
	type: string;
	language: string;
	content: unknown;
	meta_data: unknown;
}

export function componentDataConverter(data: App.Pages, newInstance: newInstance) {
	if (!data) return newInstance;
	const newData = {
		name: data?.name,
		route: data?.route,
		type: data?.type,
		language: data?.language,
		content: JSON.parse(data?.content as string),
		meta_data: JSON.parse(data?.meta_data as string)
	};

	if (!newData.type || !newData.name) return newInstance;
	return newData;
}
