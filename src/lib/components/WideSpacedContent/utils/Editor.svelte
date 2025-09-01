<script lang="ts">
	import { page } from '$app/state';
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import { colorArray } from '$lib/config/colorArray';

	let { pageData = $bindable() } = $props();
	const buttonTitle = $state('Edit Wide-Spaced Content');
	let active = $state(false);
	let processing = $state(false);
	let fail = $state(false);
	let success = $state(false);
	let items = $state([...colorArray]);

	let formRefresh = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log('Wide-Spaced Content Updated.');
	}

	function handleCancel() {
		pageData = page?.data?.wideContent;
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
	children={contentEditor}
	onsubmit={handleSubmit}
	oncancel={handleCancel}
/>

{#snippet contentEditor()}
	{#key formRefresh}
		<div class="editor">
			<General
				name="componentHeight"
				label="Component Height"
				placeholder="Enter the percentage of screen the component should consume when fully in view."
				type={'number'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.componentHeight}
			/>
		</div>
		<div class="editor">
			<SelectInput
				name="backgroundColor"
				label="Select the Background Color"
				multiple={false}
				themeBase={'One'}
				required={true}
				placeholder="Select a Background Color for the section."
				bind:value={pageData.backgroundColor}
				{items}
			/>
		</div>
		<div class="editor">
			<QuillInput
				name="wideContent"
				label="Wide Line Spacing Content"
				placeholder="Enter the content you want in this component."
				themeBase={'One'}
				bind:value={pageData.wideContent}
			/>
		</div>

		<div class="editor">
			<QuillInput
				name="narrowContent"
				label="Narrow Line Spacing Content"
				placeholder="Enter the content you want in this component."
				themeBase={'One'}
				bind:value={pageData.narrowContent}
			/>
		</div>
		<div class="input">
			<General
				name="backgroundImageUrl"
				label="Background Image URL"
				placeholder="provide the URL to the component background image."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.backgroundImageUrl}
			/>
		</div>
	{/key}
{/snippet}
