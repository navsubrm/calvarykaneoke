<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import colorSelectOptions from '$lib/config/optionArrays/colorSelectOptions';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Large Image Link');
</script>

<ContentEditorPanel {buttonTitle} action={'?/set-exemption'} children={contentEditor} bind:reset />

{#snippet contentEditor()}
	<input type="hidden" name="component_type" value={'Exemption Letter'} />
	<div class="input">
		<General
			name="component_name"
			label="Add Component Name if new: "
			placeholder="If this is the first use of the component, provide a name for reference."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.component_name}
		/>
	</div>
	<div class="input">
		<General
			name="component_height"
			label="Select the component height"
			placeholder="Enter the portion of the screen the component should take up when in view"
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.component_height}
		/>
	</div>

	<fieldset>
		<legend>Background Settings:</legend>

		<div class="input">
			<SelectInput
				name="background_color_base"
				label="Background Color Base"
				placeholder="Select the background base color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorSelectOptions}
				bind:value={pageData.content.background_color.base}
			/>
		</div>
		<div class="input">
			<SelectInput
				name="background_color_upper"
				label="Gradient Upper Color"
				placeholder="Select the upper gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorSelectOptions}
				bind:value={pageData.content.background_color.upper}
			/>
		</div>
		<div class="input">
			<SelectInput
				name="background_color_lower"
				label="Gradient Lower Color"
				placeholder="Select the lower gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorSelectOptions}
				bind:value={pageData.content.background_color.lower}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>General Content:</legend>

		<div class="editor">
			<QuillInput
				name="general_content_upper"
				label="Provide Upper Content:"
				placeholder="Enter the content you want displayed on the top of the screen."
				themeBase={'One'}
				bind:value={pageData.content.general_content.upper}
			/>
		</div>

		<div class="editor">
			<QuillInput
				name="general_content_middle"
				label="Provide Middle Content:"
				placeholder="Enter the content you want displayed below the action button."
				themeBase={'One'}
				bind:value={pageData.content.general_content.middle}
			/>
		</div>

		<div class="editor">
			<QuillInput
				name="general_content_lower"
				label="Provide Lower Content"
				placeholder="Enter the content you want displayed below the horizontal line."
				themeBase={'One'}
				bind:value={pageData.content.general_content.lower}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Button Information: </legend>
		<div class="input">
			<General
				name="button_label"
				label="Button Label: "
				placeholder="Enter the button label."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.button.label}
			/>
		</div>

		<div class="input">
			<General
				name="button_href"
				label="Button Reference Link:"
				placeholder="Enter the url of the redirect site."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.button.href}
			/>
		</div>
	</fieldset>
{/snippet}
