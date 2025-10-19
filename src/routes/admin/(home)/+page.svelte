<script lang="ts">
	import { page } from '$app/state';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';
	import FormButton from '$lib/userInputs/button/FormButton.svelte';
	import languageSelectOptions from '$lib/config/optionArrays/languageSelectOptions';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import { onDestroy } from 'svelte';
	import { setTheme } from '$lib/config/theme/setTheme';
	import { enhance } from '$app/forms';
	import HeroInputs from '$lib/components/Hero/utils/Inputs.svelte';
	import LargeImageInputs from '$lib/components/LargeImageLink/utils/Inputs.svelte';
	import DualContentInputs from '$lib/components/DualContent/utils/Inputs.svelte';
	import TriPictureInputs from '$lib/components/TriPicture/utils/Inputs.svelte';
	import MetaDataInputs from '$lib/components/MetaData/utils/Inputs.svelte';

	/**
	 * !! Update for each page.
	 */
	import blank from '$lib/config/dataModels/Home';
	const pageId: string = $state('home');
	const pageRoute: string = $state('/');

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

	$inspect(pageData);
</script>

<svelte:head>
	<link rel="stylesheet" href="/styles/editor_page.css" />
	<title>Home Page Editor</title>
</svelte:head>

<section style="--_background: var({theme.one}); --_text: var({theme.two})">
	<div class="page-header">
		<h1>Home Page Editor</h1>
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
					console.log('Result from form: ', result);
					processing = false;
				};
			}}
		>
			<details open>
				<summary>General</summary>
				<fieldset>
					<legend>General Page Items</legend>
					<input type="hidden" name="name" value={pageId} />
					<input type="hidden" name="type" value={'page'} />
					<input type="hidden" name="route" value={pageRoute} />

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
				</fieldset>
			</details>

			<details>
				<summary>Hero Content</summary>
				<HeroInputs bind:pageData />
			</details>

			<details>
				<summary>Current Sermon Content</summary>
				<LargeImageInputs bind:pageData />
			</details>

			<details>
				<summary>Dual Content</summary>
				<DualContentInputs bind:pageData />
			</details>

			<!-- JD About Inputs. -->
			<details>
				<summary>JD About Section</summary>
				<TriPictureInputs bind:pageData />
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
