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
	gradient_upper: FormDataEntryValue;
	gradient_lower: FormDataEntryValue;
	general_content: FormDataEntryValue;
	stream_count: FormDataEntryValue;
	[key: string]: FormDataEntryValue;
};

/**
 * ?? I am using [key: string]: FormDataEntryValue for the
 * ?? dynamic streams_title_{index} and
 * ?? streams_source_{index}
 */

export type { Content, FormData };
