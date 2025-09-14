type HeroContent = {
	background_image_url: string;
	hero_icon_content: string;
	hero_title_content: string;
	sub_title_reft: string;
	sub_title_right: string;
};

type heroForm = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	background_image_url: FormDataEntryValue;
	hero_icon_content: FormDataEntryValue;
	hero_title_content: FormDataEntryValue;
	sub_title_left: FormDataEntryValue;
	sub_title_right: FormDataEntryValue;
};

export type { HeroContent, heroForm };
