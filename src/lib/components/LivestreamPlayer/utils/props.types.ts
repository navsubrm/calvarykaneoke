type Content = {
	component_height: number;
	background_color: string;
	background_image_url: string;
	streams: [{ title: string; src: string }];
};

type FormData = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	component_height: FormDataEntryValue;
	background_color: FormDataEntryValue;
	streams: FormDataEntryValue;
};

export type { Content, FormData };
