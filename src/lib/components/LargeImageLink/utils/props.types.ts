type LargeImageLinkContent = {
	component_height: number;
	main_image: {
		href: string;
		url: string;
		alt: string;
	};
};

type LargeImageLinkForm = {
	large_image_component_height: FormDataEntryValue;
	large_image_main_image_href: FormDataEntryValue;
	large_image_main_image_url: FormDataEntryValue;
	large_image_main_image_alt: FormDataEntryValue;
};

export type { LargeImageLinkContent, LargeImageLinkForm };
