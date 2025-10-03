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
	social_footer_component_height: FormDataEntryValue;
	social_footer_background_color: FormDataEntryValue;
	social_footer_x_post_text: FormDataEntryValue;
	social_footer_facebook_share_link: FormDataEntryValue;
	social_footer_mail_to_subject: FormDataEntryValue;
	social_footer_mail_to_body: FormDataEntryValue;
};

export type { Content, FormData };
