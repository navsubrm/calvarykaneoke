type WideSpacedContent = {
	component_height: number;
	background_color: string;
	background_image_url: string;
	wide_content: string;
	narrow_content: string;
};

type WideSpacedContentForm = {
	component_type: FormDataEntryValue;
	component_name: FormDataEntryValue;
	component_height: FormDataEntryValue;
	background_color: FormDataEntryValue;
	background_image_url: FormDataEntryValue;
	wide_content: FormDataEntryValue;
	narrow_content: FormDataEntryValue;
};

export type { WideSpacedContent, WideSpacedContentForm };
