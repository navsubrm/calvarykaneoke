<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
<Footer />
