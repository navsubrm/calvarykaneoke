export function componentDataConverter(data: App.Components, newInstance: App.Components) {
	if (!data) return newInstance;
	const newData = {
		component_type: data?.component_type,
		component_name: data?.component_name,
		content: JSON.parse(data?.content)
	};

	if (!newData.component_type || !newData.component_name) return newInstance;
	return newData;
}
