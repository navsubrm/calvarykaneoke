<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Hero Content');
</script>

<ContentEditorPanel {buttonTitle} action={'?/set-hero'} children={heroContentSnippet} bind:reset />

{#snippet heroContentSnippet()}
	<input type="hidden" name="component_type" value={'Hero'} />
	<div class="input">
		<General
			name="component_name"
			label="Component Name"
			placeholder="Enter the component name."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.component_name}
		/>
		<General
			name="background_image_url"
			label="Background Image URL"
			placeholder="Enter the URL for the background Image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.background_image_url}
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
			bind:value={pageData.content.hero_icon_content}
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
			bind:value={pageData.content.hero_title_content}
		/>
	</div>
	<div class="editor">
		<QuillInput
			name="sub_title_left"
			label="Sub Title Left"
			placeholder="Enter your Hero title content here."
			themeBase={'One'}
			bind:value={pageData.content.sub_title_left}
		/>
	</div>
	<div class="editor">
		<QuillInput
			name="sub_title_right"
			label="Sub Title Right"
			placeholder="Enter your Hero title content here."
			themeBase={'One'}
			bind:value={pageData.content.sub_title_right}
		/>
	</div>
{/snippet}
