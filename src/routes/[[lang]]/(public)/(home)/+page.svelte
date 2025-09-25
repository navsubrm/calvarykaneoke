<script lang="ts">
	import { page } from '$app/state';
	import Hero from './utils/Hero/index.svelte';
	import LargeImageLink from './utils/LargeImageLink/index.svelte';
	import DualContent from './utils/DualContent/index.svelte';
	import TriPicture from './utils/TriPicture/index.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';
	import { onMount, onDestroy } from 'svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();

	onMount(() => {
		if (page.url.searchParams.get('edit') == 'true') {
			editor = new BroadcastChannel('edit-home');
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

<!-- Add in the meta data for the page. -->

<Hero data={pageData?.content?.hero} />
<LargeImageLink data={pageData?.content?.large_image} />
<DualContent data={pageData?.content?.dual_content} />
<TriPicture data={pageData?.content?.tri_image} />
