type Content = {
	component_height: number;
	background_color: {
		base: string;
		upper: string;
		lower: string;
	};
	general_content: {
		upper: string;
		middle: string;
		lower: string;
	};
	button: {
		label: string;
		href: string;
	};
};

type FormData = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	component_height: FormDataEntryValue;
	background_color_base: FormDataEntryValue;
	background_color_upper: FormDataEntryValue;
	background_color_lower: FormDataEntryValue;
	general_content_upper: FormDataEntryValue;
	general_content_middle: FormDataEntryValue;
	general_content_lower: FormDataEntryValue;
	button_label: FormDataEntryValue;
	button_href: FormDataEntryValue;
	[key: string]: FormDataEntryValue;
};

/**
 * ?? I am using [key: string]: FormDataEntryValue for the
 * ?? dynamic streams_title_{index} and
 * ?? streams_source_{index}
 */

export type { Content, FormData };
