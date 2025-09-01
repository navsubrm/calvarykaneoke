<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();
	const buttonTitle = $state('Edit Current Sermon Content');
	let processing = $state(false);
	let fail = $state(false);
	let success = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log('Hero Content Updated.');
	}
</script>

<ContentEditorPanel
	{buttonTitle}
	bind:processing
	bind:success
	bind:fail
	children={heroContentEditor}
	onsubmit={handleSubmit}
/>

{#snippet heroContentEditor()}
	<div class="input">
		<General
			name="componentHeight"
			label="Select the component height"
			placeholder="Enter the portion of the screen the component should take up when in view"
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.componentHeight}
		/>
	</div>
	<div class="input">
		<General
			name="mainImageHREF"
			label="Main Image Link reference"
			placeholder="Enter the destination url for the image link."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.mainImage.href}
		/>
	</div>
	<div class="editor">
		<General
			name="mainImageURL"
			label="Main Image URL"
			placeholder="Enter the URL for the sermon image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.mainImage.url}
		/>
	</div>
	<div class="editor">
		<General
			name="mainImageAlt"
			label="Main Image Title"
			placeholder="Enter the title that will appear below the image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.mainImage.alt}
		/>
	</div>
{/snippet}
