<script lang="ts">
	import { page } from '$app/state';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import { onDestroy } from 'svelte';
	import { setTheme } from '$lib/config/theme/setTheme';
	import { enhance } from '$app/forms';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';
	import FormButton from '$lib/userInputs/button/FormButton.svelte';
	import languageSelectOptions from '$lib/config/optionArrays/languageSelectOptions';
	import colorSelectOptions from '$lib/config/optionArrays/colorSelectOptions';
	import SocialFooterInputs from '$lib/components/SocialFooter/utils/Inputs.svelte';
	import MetaDataInputs from '$lib/components/MetaData/utils/Inputs.svelte';

	/**
	 * !! Update with each page.
	 * */
	import blank from '$lib/config/dataModels/Exemption';
	const pageId: string = $state('exemption');
	const pageRoute: string = $state('/exemption');

	const action: string = $state('?/set-page-content');
	const label: string = $state('Update Page Content');
	const processingLabel: string = $state('Processing...');
	const failLabel: string = $state('Something went wrong. Please try again.');
	const successLabel: string = $state('Page Successfully Updated.');
	const theme = $state(setTheme('One', 'form'));

	let form: HTMLFormElement | undefined = $state();
	let processing: boolean = $state(page?.form?.processing || false);
	let fail: boolean = $state(page?.form?.fail || false);
	let success: boolean = $state(page?.form?.success || false);
	let reset: boolean = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();
	const editorId: string = $state(crypto.randomUUID());

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.page, blank);
	});

	$effect(() => updateContent());

	onDestroy(() => editor?.close());

	function startEditor() {
		const url = page.url.href.replace('/admin', '').replace('?/set-page-content', '');
		window.open(`${url}?mode=edit&edit-id=${editorId}`, '_blank');
		editor = new BroadcastChannel(`edit-${editorId}`);
		editor.onmessage = (e: MessageEvent) => {
			if (e.data.type == 'ready') updateContent();
		};
	}

	function updateContent() {
		editor?.postMessage({ type: 'update', payload: { message: JSON.stringify(pageData) } });
	}

	function oncancel(e: MouseEvent) {
		e.preventDefault();
		reset = !reset;
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/styles/editor_page.css" />
	<title>Exemption Page Editor</title>
</svelte:head>

<section style="--_background: var({theme.one}); --_text: var({theme.two})">
	<div class="page-header">
		<h1>Exemption Page Editor</h1>
		<MainButton label="Start Editor View" onclick={startEditor} />
	</div>
	{#if !pageData}
		<p>Loading...</p>
	{:else}
		<form
			bind:this={form}
			method="POST"
			{action}
			use:enhance={() => {
				processing = true;
				return ({ result }) => {
					processing = false;
				};
			}}
		>
			<details open>
				<summary>General</summary>
				<fieldset>
					<legend>General Page Items</legend>
					<input type="hidden" name="name" value={pageId} />
					<input type="hidden" name="route" value={pageRoute} />
					<input type="hidden" name="type" value={'page'} />

					<div class="input">
						<SelectInput
							name="language"
							label="Language: "
							placeholder="Enter the language used in this entry."
							required={true}
							multiple={false}
							items={languageSelectOptions}
							themeBase={'One'}
							value={pageData?.language}
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
							value={pageData?.content?.component_height}
						/>
					</div>
					<div class="input">
						<General
							name="max_width"
							label="Maximum Content Width"
							placeholder="Enter the maximum width for content in pixels."
							type={'number'}
							required={true}
							themeBase={'One'}
							value={pageData?.content?.max_width}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Background Settings:</legend>

					<div class="input">
						<SelectInput
							name="background_base"
							label="Background Color"
							placeholder="Select the background base color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorSelectOptions}
							value={pageData?.content?.background?.base}
						/>
					</div>
					<div class="input">
						<SelectInput
							name="background_upper"
							label="Gradient Upper Color"
							placeholder="Select the upper gradient color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorSelectOptions}
							value={pageData?.content?.background?.upper}
						/>
					</div>

					<div class="input">
						<SelectInput
							name="background_lower"
							label="Gradient Middle Color"
							placeholder="Select the middle gradient color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorSelectOptions}
							value={pageData?.content?.background?.lower}
						/>
					</div>
				</fieldset>
			</details>

			<details>
				<summary>General Content</summary>
				<fieldset>
					<legend>Upper Content</legend>

					<div class="editor">
						<QuillInput
							name="general_content_upper"
							label="Provide Upper Content"
							placeholder="Enter the content you want displayed above the video."
							themeBase={'One'}
							value={pageData?.content?.general_content?.upper}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Middle Content</legend>

					<div class="editor">
						<QuillInput
							name="general_content_middle"
							label="Provide Middle Content"
							placeholder="Enter the content you want displayed above the video."
							themeBase={'One'}
							value={pageData?.content?.general_content?.middle}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Lower Content</legend>
					<div class="editor">
						<QuillInput
							name="general_content_lower"
							label="Provide Lower Content"
							placeholder="Enter the content you want displayed below the video."
							themeBase={'One'}
							value={pageData?.content?.general_content?.lower}
						/>
					</div>
				</fieldset>
			</details>

			<details>
				<summary>Button Content</summary>
				<fieldset>
					<legend>Button Label and Link Reference</legend>
					<div class="input">
						<General
							name="button_label"
							label="Button Label Text"
							placeholder="Enter label for Link Button"
							type={'text'}
							required={true}
							themeBase={'One'}
							value={pageData?.content?.button?.label}
						/>
					</div>

					<div class="input">
						<General
							name="button_href"
							label="Button Reference URL"
							placeholder="Enter button destination URL."
							type={'text'}
							required={true}
							themeBase={'One'}
							value={pageData?.content?.button?.href}
						/>
					</div>
				</fieldset>
			</details>

			<details>
				<summary>Social Footer</summary>
				<SocialFooterInputs {pageData} />
			</details>

			<MetaDataInputs pageData />

			<Submit
				{label}
				{processingLabel}
				{processing}
				{failLabel}
				{fail}
				{successLabel}
				{success}
				themeBase={'One'}
			/>
			<FormButton label={'Cancel Changes'} themeBase={'One'} onclick={oncancel} />
		</form>
	{/if}
</section>
