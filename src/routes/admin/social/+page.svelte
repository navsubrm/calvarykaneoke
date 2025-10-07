<script lang="ts">
	import { page } from '$app/state';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import { onDestroy } from 'svelte';
	import { setTheme } from '$lib/config/theme/setTheme';
	import { enhance } from '$app/forms';
	import General from '$lib/userInputs/general/General.svelte';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';
	import FormButton from '$lib/userInputs/button/FormButton.svelte';
	import languageSelectOptions from '$lib/config/optionArrays/languageSelectOptions';
	import colorSelectOptions from '$lib/config/optionArrays/colorSelectOptions';
	import AboutChurchInputs from '$lib/components/AboutChurch/utils/Inputs.svelte';
	import SocialLargeFollowInputs from '$lib/components/SocialLargeFollow/utils/Inputs.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import MetaDataInputs from '$lib/components/MetaData/utils/Inputs.svelte';

	/**
	 * !! Update with each page.
	 * */
	import blank from '$lib/config/dataModels/Social';

	const pageId: string = $state('social');
	const pageRoute: string = $state('/social');

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
	<title>Social Page Editor</title>
</svelte:head>

<section style="--_background: var({theme.one}); --_text: var({theme.two})">
	<div class="page-header">
		<h1>Social Page Editor</h1>
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
							bind:value={pageData.language}
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
				</fieldset>

				<fieldset>
					<legend>Background Settings:</legend>

					<div class="input">
						<SelectInput
							name="background_upper"
							label="Background Upper Color"
							placeholder="Select the upper background color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorSelectOptions}
							bind:value={pageData.content.background.upper}
						/>
					</div>

					<div class="input">
						<SelectInput
							name="background_base"
							label="Background Base Color"
							placeholder="Select the background base color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorSelectOptions}
							bind:value={pageData.content.background.base}
						/>
					</div>

					<div class="input">
						<SelectInput
							name="background_lower"
							label="Gradient Lower Color"
							placeholder="Select the lower gradient color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorSelectOptions}
							bind:value={pageData.content.background.lower}
						/>
					</div>
				</fieldset>
			</details>

			<details>
				<summary>Content</summary>

				<fieldset>
					<legend>Upper Content</legend>
					<div class="editor">
						<QuillInput
							name="content_upper"
							label="Provide Upper Content"
							placeholder="Enter the content you want displayed above the social links."
							themeBase={'One'}
							bind:value={pageData.content.content.upper}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Lower Content</legend>

					<div class="editor">
						<QuillInput
							name="content_lower"
							label="Provide Lower Content"
							placeholder="Enter the content you want displayed below the social links."
							themeBase={'One'}
							bind:value={pageData.content.content.lower}
						/>
					</div>
				</fieldset>
			</details>

			<details>
				<summary>About Calvary Kaneohe</summary>
				<AboutChurchInputs bind:pageData />
			</details>

			<details>
				<summary>Social Media Link Data</summary>
				<SocialLargeFollowInputs bind:pageData />
			</details>

			<MetaDataInputs bind:pageData />

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
