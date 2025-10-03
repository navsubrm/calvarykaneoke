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
	tri_image_background_upper_color: FormDataEntryValue;
	tri_image_background_lower_color: FormDataEntryValue;
	tri_image_primary_link_href: FormDataEntryValue;
	tri_image_primary_link_label: FormDataEntryValue;
	tri_image_primary_link_alt: FormDataEntryValue;
	tri_image_primary_image_src: FormDataEntryValue;
	tri_image_aside_upper_image_url: FormDataEntryValue;
	tri_image_aside_upper_link_href: FormDataEntryValue;
	tri_image_aside_upper_link_label: FormDataEntryValue;
	tri_image_aside_upper_link_alt: FormDataEntryValue;
	tri_image_aside_upper_content: FormDataEntryValue;
	tri_image_aside_lower_image_url: FormDataEntryValue;
	tri_image_aside_lower_link_href: FormDataEntryValue;
	tri_image_aside_lower_link_label: FormDataEntryValue;
	tri_image_aside_lower_link_alt: FormDataEntryValue;
	tri_image_aside_lower_content: FormDataEntryValue;
};

export type { TriPictureContent, TriPictureContentForm };
