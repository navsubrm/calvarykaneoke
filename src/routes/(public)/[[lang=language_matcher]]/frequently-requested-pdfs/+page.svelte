<script lang="ts">
	import { page } from '$app/state';
	import { applyAction, enhance } from '$app/forms';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Contact';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import SocialFollow from '$lib/components/SocialFollow/Index.svelte';
	import GradientSection from '$lib/components_style/GradientSection/Index.svelte';
	import GeneralContent from '$lib/components_style/GeneralContent/Index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();
	let processing = $state(false);
	let success = $state(page?.form?.success || false);
	let fail = $state(page?.form?.fail || false);

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

	$inspect('Form Data: ', page?.form);
</script>

<svelte:head>
	<title>{pageData?.meta_data?.title}</title>
</svelte:head>

<EditorNotice bind:editor />
<GradientSection Children={contentStyling} bind:data={pageData.content.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} />
	{#snippet content()}
		<div class="main-content">
			<GeneralContentBlock data={pageData?.content?.main_content?.main} />
		</div>
	{/snippet}
{/snippet}

<style>
	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.5em;
	}
</style>
