type Content = {
	component_height: number;
	background_image: {
		url: string;
	};
	background_color: string;
	gradient_upper: string;
	gradient_middle: string;
	gradient_lower: string;
	upper_content: string;
	video: {
		title: string;
		author: string;
		src: string;
		footer: {
			url: string;
			text: string;
		};
	};
	lower_content: string;
	abc: {
		a: string;
		b: string;
		c: string;
	};
};

type FormData = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	component_height: FormDataEntryValue;
	background_image_url: FormDataEntryValue;
	background_color: FormDataEntryValue;
	gradient_upper: FormDataEntryValue;
	gradient_middle: FormDataEntryValue;
	gradient_lower: FormDataEntryValue;
	upper_content: FormDataEntryValue;
	video_title: FormDataEntryValue;
	video_author: FormDataEntryValue;
	video_src: FormDataEntryValue;
	video_footer_url: FormDataEntryValue;
	video_footer_text: FormDataEntryValue;
	lower_content: FormDataEntryValue;
	abc_a: FormDataEntryValue;
	abc_b: FormDataEntryValue;
	abc_c: FormDataEntryValue;
	[key: string]: FormDataEntryValue;
};

/**
 * ?? I am using [key: string]: FormDataEntryValue for the
 * ?? dynamic streams_title_{index} and
 * ?? streams_source_{index}
 */

export type { Content, FormData };
