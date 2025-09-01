<script lang="ts">
	import { page } from '$app/state';
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import { colorArray } from '$lib/config/colorArray';

	let { pageData = $bindable() } = $props();
	const buttonTitle = $state('Edit Tri-Picture Content');
	let active = $state(false);
	let processing = $state(false);
	let fail = $state(false);
	let success = $state(false);

	let formRefresh = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log('Tri-Picture Content Updated.');
	}

	function handleCancel() {
		pageData = page?.data?.triPicture;
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
		<fieldset>
			<legend>Background Gradient Color Selection</legend>
			<div class="input">
				<SelectInput
					name="backgroundUpperColor"
					label="Background Upper Color"
					placeholder="Select the upper background gradient color."
					required={true}
					themeBase={'One'}
					multiple={false}
					items={colorArray}
					bind:value={pageData.backgroundUpperColor}
				/>
			</div>

			<div class="input">
				<SelectInput
					name="backgroundLowerColor"
					label="Background Lower Color"
					placeholder="Select the lower background gradient color."
					required={true}
					themeBase={'One'}
					multiple={false}
					items={colorArray}
					bind:value={pageData.backgroundLowerColor}
				/>
			</div>
		</fieldset>

		<fieldset>
			<legend>Primary Image Content </legend>
			<div class="input">
				<General
					name="primary-link-href"
					label="Primary Link Href"
					placeholder="Enter URL for primary image link."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.primaryContent.link.href}
				/>
			</div>
			<div class="input">
				<General
					name="primary-link-label"
					label="Primary Link Label"
					placeholder="Enter label for primary link."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.primaryContent.link.label}
				/>
			</div>
			<div class="input">
				<General
					name="primary-link-alt"
					label="Primary Link Alt Text"
					placeholder="Enter screen reader text for primary link."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.primaryContent.link.alt}
				/>
			</div>
			<div class="input">
				<General
					name="primary-link-image"
					label="Primary Link Image URL"
					placeholder="Enter the URL for the primary image."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.primaryContent.image.src}
				/>
			</div>
		</fieldset>

		<fieldset>
			<legend>Upper Aside Image</legend>
			<div class="input">
				<General
					name="aside-upper-image-url"
					label="Image URL"
					placeholder="Enter the URL for the upper image."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[0].image.src}
				/>
			</div>
			<div class="input">
				<General
					name="aside-upper-link-href"
					label="Upper Content Block Href"
					placeholder="Enter the link URL for the upper content block."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[0].link.href}
				/>
			</div>
			<div class="input">
				<General
					name="aside-upper-link-label"
					label="Upper Content Block Label"
					placeholder="Enter the link URL for the upper content block."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[0].link.href}
				/>
			</div>
			<div class="input">
				<General
					name="aside-upper-link-alt"
					label="Upper Content Block Screen Reader Text"
					placeholder="Enter the text that will be read by the screen reader when hovering over the link."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[0].link.href}
				/>
			</div>
			<div class="editor">
				<QuillInput
					name="aside-upper-content"
					label="Upper Content Box visible content"
					placeholder="Enter the content you want to show in the upper content box."
					themeBase={'One'}
					bind:value={pageData.asideContent[0].content}
				/>
			</div>
		</fieldset>

		<fieldset>
			<legend>Lower Aside Image</legend>
			<div class="input">
				<General
					name="aside-lower-image-url"
					label="Image URL"
					placeholder="Enter the URL for the lower image."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[1].image.src}
				/>
			</div>
			<div class="input">
				<General
					name="aside-lower-link-href"
					label="Lower Content Block Href"
					placeholder="Enter the link URL for the lower content block."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[1].link.href}
				/>
			</div>
			<div class="input">
				<General
					name="aside-lower-link-label"
					label="Lower Content Block Label"
					placeholder="Enter the link URL for the lower content block."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[1].link.href}
				/>
			</div>
			<div class="input">
				<General
					name="aside-lower-link-alt"
					label="Lower Content Block Screen Reader Text"
					placeholder="Enter the text that will be read by the screen reader when hovering over the link."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.asideContent[1].link.href}
				/>
			</div>
			<div class="editor">
				<QuillInput
					name="aside-lower-content"
					label="Lower Content Box visible content"
					placeholder="Enter the content you want to show in the lower content box."
					themeBase={'One'}
					bind:value={pageData.asideContent[1].content}
				/>
			</div>
		</fieldset>
	{/key}
{/snippet}

<style>
	fieldset {
		padding: 1em;
	}

	legend {
		color: var(--_text);
		padding: 5px;
	}
</style>
