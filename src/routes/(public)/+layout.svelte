<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	//import { onMount } from 'svelte';

	let { children } = $props();

	// onMount(() => {
	// 	let intervalCount = 0;
	// 	let interval = setInterval(() => {
	// 		if (window.google?.translate?.TranslateElement) {
	// 			console.log('Ran if');

	// 			googleTranslateElementInit();
	// 			clearInterval(interval);
	// 		} else {
	// 			intervalCount++;
	// 			if (intervalCount > 20) clearInterval(interval);
	// 		}
	// 	}, 500);
	// });

	// function googleTranslateElementInit() {
	// 	console.log('Ran Init');
	// 	new google.translate.TranslateElement(
	// 		{
	// 			pageLanguage: 'en',
	// 			//layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
	// 			includedLanguages: 'en,es,nl,fr,de,ja,pt,ro'
	// 		},
	// 		'google_translate_element'
	// 	);
	// }
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- <script type="text/javascript" src="//translate.google.com/translate_a/element.js"></script> -->
</svelte:head>

<main>
	<div id="google_translate_element">
		<Header />
		{@render children?.()}
		<Footer />
	</div>
</main>
