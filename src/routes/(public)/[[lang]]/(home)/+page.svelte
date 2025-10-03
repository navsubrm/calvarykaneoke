<script lang="ts">
	import { page } from '$app/state';
	import Hero from '$lib/components/Hero/index.svelte';
	import LargeImageLink from '$lib/components/LargeImageLink/index.svelte';
	import DualContent from '$lib/components/DualContent/index.svelte';
	import TriPicture from '$lib/components/TriPicture/index.svelte';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Home';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';

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

<!-- Add in the meta data for the page. -->

<Hero data={pageData?.content?.hero} />
<LargeImageLink data={pageData?.content?.large_image} />
<DualContent data={pageData?.content?.dual_content} />
<TriPicture data={pageData?.content?.tri_image} />
