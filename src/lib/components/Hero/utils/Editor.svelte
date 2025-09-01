<script lang="ts">
	import { page } from '$app/state';
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';

	let { pageData = $bindable() } = $props();
	const buttonTitle = $state('Edit Hero Content');
	let active = $state(false);
	let processing = $state(false);
	let fail = $state(false);
	let success = $state(false);

	let formRefresh = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log('Hero Content Updated.');
	}

	function handleCancel() {
		pageData = page?.data?.hero;
		active = false;
		formRefresh = !formRefresh;
	}
</script>

<ContentEditorPanel
	{buttonTitle}
	bind:active
	bind:processing
	bind:success
	bind:fail
	onsubmit={handleSubmit}
	children={heroContentSnippet}
	oncancel={handleCancel}
/>

{#snippet heroContentSnippet()}
	{#key formRefresh}
		<div class="input">
			<General
				name="backgroundImage"
				label="Background Image URL"
				placeholder="Enter the URL for the background Image."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.backgroundImage}
			/>
		</div>
		<div class="input">
			<General
				name="heroIcon"
				label="Hero Content"
				placeholder="Enter your Hero title content here."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.heroIcon}
			/>
		</div>
		<div class="input">
			<General
				name="heroTitle"
				label="Hero Main Title"
				placeholder="Enter your Hero title content here."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.heroTitle}
			/>
		</div>
		<div class="editor">
			<QuillInput
				name="subTitleLeft"
				label="Sub Title Left"
				placeholder="Enter your Hero title content here."
				themeBase={'One'}
				bind:value={pageData.subTitleLeft}
			/>
		</div>
		<div class="editor">
			<QuillInput
				name="subTitleRight"
				label="Sub Title Right"
				placeholder="Enter your Hero title content here."
				themeBase={'One'}
				bind:value={pageData.subTitleRight}
			/>
		</div>
	{/key}
{/snippet}
