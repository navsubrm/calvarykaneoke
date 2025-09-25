type TriPictureContent = {
	background_upper_color: string;
	background_lower_color: string;
	primary_content: {
		image: {
			src: string;
		};
		link: {
			href: string;
			label: string;
			alt: string;
		};
	};
	aside_content: [
		{
			image: {
				src: string;
			};
			link: {
				href: string;
				label: string;
				alt: string;
			};
			content: string;
		}
	];
};

type TriPictureContentForm = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	background_upper_color: FormDataEntryValue;
	background_lower_color: FormDataEntryValue;
	primary_link_href: FormDataEntryValue;
	primary_link_label: FormDataEntryValue;
	primary_link_alt: FormDataEntryValue;
	primary_image_src: FormDataEntryValue;
	aside_upper_image_url: FormDataEntryValue;
	aside_upper_link_href: FormDataEntryValue;
	aside_upper_link_label: FormDataEntryValue;
	aside_upper_link_alt: FormDataEntryValue;
	aside_upper_content: FormDataEntryValue;
	aside_lower_image_url: FormDataEntryValue;
	aside_lower_link_href: FormDataEntryValue;
	aside_lower_link_label: FormDataEntryValue;
	aside_lower_link_alt: FormDataEntryValue;
	aside_lower_content: FormDataEntryValue;
};

export type { TriPictureContent, TriPictureContentForm };
