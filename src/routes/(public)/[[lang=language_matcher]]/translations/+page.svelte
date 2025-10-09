<script lang="ts">
	import { page } from '$app/state';
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Translations';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';
	import SocialLargeFollow from '$lib/components/SocialLargeFollow/index.svelte';
	import GradientSection from '$lib/components_style/GradientSection/Index.svelte';
	import GeneralContent from '$lib/components_style/GeneralContent/Index.svelte';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();

	//Check for edit mode, initiate, update URL to hide session id and start editor.
	onMount(() => {
		if (page?.data?.editor?.mode == 'edit') {
			page?.url.searchParams.delete('mode');
			page?.url.searchParams.delete('edit-id');
			goto(page?.url?.href, { replaceState: true });
			editor = new BroadcastChannel(`edit-${page?.data?.editor?.id}`);
			editor.postMessage({ type: 'ready' });
			editor.onmessage = (e: MessageEvent) => (pageData = JSON.parse(e.data.payload.message));
		}
	});

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.page, blank);
	});

	onDestroy(() => editor?.close());
</script>

<svelte:head>
	<title>{pageData?.meta_data?.title}</title>
</svelte:head>

<EditorNotice bind:editor />
<GradientSection Children={contentStyling} bind:data={pageData.content.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} />
	{#snippet content()}
		<div class="content-margin">
			<GeneralContentBlock data={pageData?.content?.content?.upper} />
		</div>

		<SocialLargeFollow data={pageData?.content?.social_follow_large} />

		<div class="main-button">
			<MainButton href={pageData?.content?.button?.href} label={pageData?.content?.button?.label} />
		</div>

		<div class="div-block"></div>
		<div class="content-margin">
			<GeneralContentBlock data={pageData?.content?.content?.lower} />
		</div>
	{/snippet}
{/snippet}

<style>
	.div-block {
		border-bottom: 2px solid var(--deep-purple);
		height: 20px;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.content-margin {
		margin-block: 40px;
	}

	.main-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 10vh;
	}
</style>
