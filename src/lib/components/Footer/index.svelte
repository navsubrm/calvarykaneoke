<script lang="ts">
	import { page } from '$app/state';
	import MailingListForm from './utils/MailingListForm.svelte';
	import SocialFollow from '$lib/components/SocialFollow/Index.svelte';
	import Footer from './utils/model';
	import { onMount } from 'svelte';

	const links = $state(page?.data?.links);

	let data = $state(page?.data?.footer || Footer);

	onMount(() => {
		let intervalCount = 0;
		let interval = setInterval(() => {
			if (window.google?.translate?.TranslateElement) {
				console.log('Ran if');

				googleTranslateElementInit();
				clearInterval(interval);
			} else {
				intervalCount++;
				if (intervalCount > 20) clearInterval(interval);
			}
		}, 500);
	});

	function googleTranslateElementInit() {
		console.log('Ran Init');
		new google.translate.TranslateElement(
			{ pageLanguage: 'en', includedLanguages: 'en,es,nl,fr,de,ja,pt,ro' },
			'google_translate_element'
		);
	}
</script>

<svelte:head>
	<script type="text/javascript" src="//translate.google.com/translate_a/element.js"></script>
</svelte:head>

<footer
	class="flex"
	style="
		--_background: url({data?.topBarImage}); 
		--_component-height: {data?.componentHeight}vh;
	"
>
	<div class="top-bar"></div>
	<div class="footer-content flex">
		<div class="logo">
			<h2>JD FARAG</h2>
		</div>

		<MailingListForm />

		<div class="flex nav-links">
			{#each links as { label, href, alt, location }}
				{#if location == 'footer-link'}
					<a {href} title={alt}>{label}</a>
				{/if}
			{/each}
		</div>

		<SocialFollow data={{ padding_top: 2.5, icon: { brightness: 2.9, grey_scale: 1, size: 15 } }} />
		<div id="google_translate_element"></div>
	</div>

	<small class="copyright">© Copyright {new Date().getFullYear()} J.D. Farag</small>
</footer>

<style>
	.top-bar {
		background-image: var(--_background);
		background-position: 50% 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
		height: 12px;
		width: 100%;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	footer {
		position: relative;
		flex-direction: column;
		height: var(--_component-height);
		min-height: fit-content;
		background: var(--darkness);
		padding-bottom: 3em;
	}

	.footer-content {
		flex-direction: column;
		padding: 1em;
	}

	.nav-links {
		position: relative;
		flex-wrap: wrap;
		gap: 25px;
		padding-top: 2.5em;
	}

	.nav-links :global(a:hover) {
		color: var(--floral-white);
		transition: all 0.5s ease-in-out;
	}

	h2 {
		color: var(--white);
		letter-spacing: 3px;
	}

	.logo {
		font-size: 15px;
		font-weight: 800;
		font-family:
			Tenor Sans,
			sans-serif;
		padding-bottom: 2em;
		padding-top: 3em;
	}

	footer :global(a) {
		text-decoration: none;
		text-transform: uppercase;
		color: var(--burlywood);
		font-size: 11px;
		letter-spacing: 2.5px;
		font-family:
			Tenor Sans,
			sans-serif;
	}

	.copyright {
		color: #545454;
		font-size: 9px;
		position: absolute;
		inset: auto auto 6% 3%;
	}

	:global(body > .skiptranslate) {
		display: none;
	}
	:global(body > iframe.goog-te-banner-frame) {
		display: none;
	}

	:global(.skiptranslate.goog-te-gadget),
	:global(.skiptranslate.goog-te-gadget > div) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2em;
	}
</style>
