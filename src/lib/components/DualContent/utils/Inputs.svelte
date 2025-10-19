<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import colorSelectOptions from '$lib/config/optionArrays/colorSelectOptions';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>General Content</legend>
	<div class="editor">
		<General
			name="dual_content_component_height"
			label="Component Height"
			placeholder="Enter the percentage of screen the component should consume when fully in view."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.dual_content.component_height}
		/>
	</div>
	<div class="editor">
		<SelectInput
			name="dual_content_background_color_upper"
			label="Select the Upper Background Color"
			multiple={false}
			themeBase={'One'}
			required={true}
			placeholder="Select a Background Color for the section."
			bind:value={pageData.content.dual_content.background_color_upper}
			items={colorSelectOptions}
		/>
	</div>
	<div class="editor">
		<SelectInput
			name="dual_content_background_color_lower"
			label="Select the Lower Background Color"
			multiple={false}
			themeBase={'One'}
			required={true}
			placeholder="Select a Background Color for the section."
			bind:value={pageData.content.dual_content.background_color_lower}
			items={colorSelectOptions}
		/>
	</div>
	<div class="input">
		<General
			name="dual_content_background_image_url"
			label="Background Image URL"
			placeholder="provide the URL to the component background image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.dual_content.background_image_url}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Upper Content Area</legend>

	<div class="editor">
		<QuillInput
			name="dual_content_wide_content"
			label="Wide Line Spacing Content"
			placeholder="Enter the content you want in this component."
			themeBase={'One'}
			bind:value={pageData.content.dual_content.wide_content}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Lower Content Area</legend>

	<div class="editor">
		<QuillInput
			name="dual_content_narrow_content"
			label="Narrow Line Spacing Content"
			placeholder="Enter the content you want in this component."
			themeBase={'One'}
			bind:value={pageData.content.dual_content.narrow_content}
		/>
	</div>
</fieldset>
