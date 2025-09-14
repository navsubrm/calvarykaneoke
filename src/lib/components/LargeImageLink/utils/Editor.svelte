<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Large Image Link');
</script>

<ContentEditorPanel
	{buttonTitle}
	action={'?/update-large-image-link'}
	children={contentEditor}
	bind:reset
/>

{#snippet contentEditor()}
	<input type="hidden" name="component_type" value={'Large Image Link'} />
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
	<div class="input">
		<General
			name="main_image_href"
			label="Main Image Link reference"
			placeholder="Enter the destination url for the image link."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.main_image.href}
		/>
	</div>
	<div class="editor">
		<General
			name="main_image_url"
			label="Main Image URL"
			placeholder="Enter the URL for the sermon image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.main_image.url}
		/>
	</div>
	<div class="editor">
		<General
			name="main_image_alt"
			label="Main Image Title"
			placeholder="Enter the title that will appear below the image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.main_image.alt}
		/>
	</div>
{/snippet}
