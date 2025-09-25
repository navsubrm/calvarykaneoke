export function componentDataConverter(data: App.Pages, newInstance: App.Pages) {
	if (!data) return newInstance;
	const newData = {
		name: data?.name,
		route: data?.route,
		type: data?.type,
		language: data?.language,
		content: JSON.parse(data?.content as string)
	};

	if (!newData.type || !newData.name) return newInstance;
	return newData;
}
