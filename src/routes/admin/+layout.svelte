<script>
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	let { children } = $props();
</script>

<Header />
{@render children?.()}
<Footer />
