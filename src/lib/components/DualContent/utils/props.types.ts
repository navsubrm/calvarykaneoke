type DualContent = {
	component_height: number;
	background_color_upper: string;
	background_color_lower: string;
	background_image_url: string;
	wide_content: string;
	narrow_content: string;
};

type DualContentForm = {
	dual_content_component_height: FormDataEntryValue;
	dual_content_background_color_upper: FormDataEntryValue;
	dual_content_background_color_lower: FormDataEntryValue;
	dual_content_background_image_url: FormDataEntryValue;
	dual_content_wide_content: FormDataEntryValue;
	dual_content_narrow_content: FormDataEntryValue;
};

export type { DualContent, DualContentForm };
