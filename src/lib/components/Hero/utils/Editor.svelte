<script lang="ts">
	import { page } from '$app/state';
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();
	const buttonTitle = $state('Edit Hero Content');

	$effect(() => {
		reset;
		pageData = page?.data?.hero;
	});
</script>

<ContentEditorPanel {buttonTitle} action={'?/edit-home'} children={heroContentSnippet} bind:reset />

{#snippet heroContentSnippet()}
	<input type="hidden" name="component" value="hero" />
	<div class="input">
		<General
			name="background_image_url"
			label="Background Image URL"
			placeholder="Enter the URL for the background Image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.background_image_url}
		/>
	</div>
	<div class="input">
		<General
			name="hero_icon_content"
			label="Hero Content"
			placeholder="Enter your Hero title content here."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.hero_icon_content}
		/>
	</div>
	<div class="input">
		<General
			name="hero_title_content"
			label="Hero Main Title"
			placeholder="Enter your Hero title content here."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.hero_title_content}
		/>
	</div>
	<div class="editor">
		<QuillInput
			name="sub_title_left"
			label="Sub Title Left"
			placeholder="Enter your Hero title content here."
			themeBase={'One'}
			bind:value={pageData.sub_title_left}
		/>
	</div>
	<div class="editor">
		<QuillInput
			name="sub_title_right"
			label="Sub Title Right"
			placeholder="Enter your Hero title content here."
			themeBase={'One'}
			bind:value={pageData.sub_title_right}
		/>
	</div>
{/snippet}
