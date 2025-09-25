type LargeImageLinkContent = {
	component_height: number;
	main_image: {
		href: string;
		url: string;
		alt: string;
	};
};

type LargeImageLinkForm = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	component_height: FormDataEntryValue;
	main_image_href: FormDataEntryValue;
	main_image_url: FormDataEntryValue;
	main_image_alt: FormDataEntryValue;
};

export type { LargeImageLinkContent, LargeImageLinkForm };
