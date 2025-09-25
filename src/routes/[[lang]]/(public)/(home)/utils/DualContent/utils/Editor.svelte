<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import { colorArray } from '$lib/config/selectInputOptionArrays';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Wide Spaced Content');
</script>

<ContentEditorPanel
	{buttonTitle}
	action={'?/update-wide-spaced-content'}
	children={contentEditor}
	bind:reset
/>

{#snippet contentEditor()}
	<input type="hidden" name="component_type" value={'Wide Spaced Content'} />
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
	<div class="editor">
		<General
			name="component_height"
			label="Component Height"
			placeholder="Enter the percentage of screen the component should consume when fully in view."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.component_height}
		/>
	</div>
	<div class="editor">
		<SelectInput
			name="background_color"
			label="Select the Background Color"
			multiple={false}
			themeBase={'One'}
			required={true}
			placeholder="Select a Background Color for the section."
			bind:value={pageData.content.background_color}
			items={colorArray}
		/>
	</div>
	<div class="editor">
		<QuillInput
			name="wide_content"
			label="Wide Line Spacing Content"
			placeholder="Enter the content you want in this component."
			themeBase={'One'}
			bind:value={pageData.content.wide_content}
		/>
	</div>

	<div class="editor">
		<QuillInput
			name="narrow_content"
			label="Narrow Line Spacing Content"
			placeholder="Enter the content you want in this component."
			themeBase={'One'}
			bind:value={pageData.content.narrow_content}
		/>
	</div>
	<div class="input">
		<General
			name="background_image_url"
			label="Background Image URL"
			placeholder="provide the URL to the component background image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.background_image_url}
		/>
	</div>
{/snippet}
