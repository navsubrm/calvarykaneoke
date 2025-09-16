type Content = {
	component_height: number;
	background_color: string;
	x_post_text: string;
	facebook_share_link: string;
	mail_to: {
		subject: string;
		body: string;
	};
};

type FormData = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	component_height: FormDataEntryValue;
	background_color: FormDataEntryValue;
	x_post_text: FormDataEntryValue;
	facebook_share_link: FormDataEntryValue;
	mail_to_subject: FormDataEntryValue;
	mail_to_body: FormDataEntryValue;
};

export type { Content, FormData };
