<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import colorSelectOptions from '$lib/config/optionArrays/colorSelectOptions';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>JD About Content</legend>
	<fieldset>
		<legend>Background Gradient Color Selection</legend>
		<div class="input">
			<SelectInput
				name="tri_image_background_upper_color"
				label="Background Upper Color"
				placeholder="Select the upper background gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorSelectOptions}
				value={pageData?.content?.tri_image?.background_upper_color}
			/>
		</div>

		<div class="input">
			<SelectInput
				name="tri_image_background_lower_color"
				label="Background Lower Color"
				placeholder="Select the lower background gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorSelectOptions}
				value={pageData?.content?.tri_image?.background_lower_color}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Primary Image Content </legend>
		<div class="input">
			<General
				name="tri_image_primary_link_href"
				label="Primary Link Href"
				placeholder="Enter URL for primary image link."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.primary_content?.link?.href}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_primary_link_label"
				label="Primary Link Label"
				placeholder="Enter label for primary link."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.primary_content?.link?.label}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_primary_link_alt"
				label="Primary Link Alt Text"
				placeholder="Enter screen reader text for primary link."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.primary_content?.link?.alt}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_primary_image_src"
				label="Primary Image URL"
				placeholder="Enter the URL for the primary image."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.primary_content?.image?.src}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Upper Aside Image</legend>
		<div class="input">
			<General
				name="tri_image_aside_upper_image_url"
				label="Image URL"
				placeholder="Enter the URL for the upper image."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[0]?.image?.src}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_aside_upper_link_href"
				label="Upper Content Block Href"
				placeholder="Enter the link URL for the upper content block."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[0]?.link?.href}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_aside_upper_link_label"
				label="Upper Content Block Label"
				placeholder="Enter the link URL for the upper content block."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[0]?.link?.href}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_aside_upper_link_alt"
				label="Upper Content Block Screen Reader Text"
				placeholder="Enter the text that will be read by the screen reader when hovering over the link."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[0]?.link?.href}
			/>
		</div>
		<div class="editor">
			<QuillInput
				name="tri_image_aside_upper_content"
				label="Upper Content Box visible content"
				placeholder="Enter the content you want to show in the upper content box."
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[0]?.content}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Lower Aside Image</legend>
		<div class="input">
			<General
				name="tri_image_aside_lower_image_url"
				label="Image URL"
				placeholder="Enter the URL for the lower image."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[1]?.image?.src}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_aside_lower_link_href"
				label="Lower Content Block Href"
				placeholder="Enter the link URL for the lower content block."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[1]?.link?.href}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_aside_lower_link_label"
				label="Lower Content Block Label"
				placeholder="Enter the link URL for the lower content block."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[1]?.link?.href}
			/>
		</div>
		<div class="input">
			<General
				name="tri_image_aside_lower_link_alt"
				label="Lower Content Block Screen Reader Text"
				placeholder="Enter the text that will be read by the screen reader when hovering over the link."
				type={'text'}
				required={true}
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[1]?.link?.href}
			/>
		</div>
		<div class="editor">
			<QuillInput
				name="tri_image_aside_lower_content"
				label="Lower Content Box visible content"
				placeholder="Enter the content you want to show in the lower content box."
				themeBase={'One'}
				value={pageData?.content?.tri_image?.aside_content[1]?.content}
			/>
		</div>
	</fieldset>
</fieldset>
