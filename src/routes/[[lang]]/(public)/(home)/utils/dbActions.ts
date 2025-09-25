export async function formDataConversion(request: Request) {
	const formData = Object.fromEntries(await request.formData());
	const componentDBDataObject: App.Components = {
		component_type: formData.component_type.toString(),
		component_name: formData.component_name.toString(),
		component_language: formData.component_language.toString(),
		content: JSON.stringify({
			// This will need to reflect the whole page.

			component_height: Number(formData?.component_height),
			background_color: JSON.parse(formData?.background_color.toString()).value,
			background_image_url: formData?.background_image_url.toString(),
			wide_content: formData?.wide_content.toString(),
			narrow_content: formData?.narrow_content.toString()
		})
	};

	return componentDBDataObject;
}
