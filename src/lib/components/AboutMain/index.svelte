<script lang="ts">
	import type { Props } from './utils/props.types';
	import ChevronAnimation from '$lib/icons/ChevronAnimation/ChevronAnimation.svelte';

	let { pageData = $bindable() }: Props = $props();
	let scrollY = $state(0);
	let Y = $state(0);

	function handleScrollY() {
		Y = 0.25 * scrollY;
	}
</script>

<svelte:window bind:scrollY onscroll={handleScrollY} />

<section
	class="large-bg"
	style="--_component-height: {pageData?.content?.about_main?.component_height}vh; 
		--_background-img: url({pageData?.content?.about_main?.src}); --_top: -{Y}px"
>
	<h1>{pageData?.content?.about_main?.content}</h1>

	<div class="chev-container">
		<ChevronAnimation />
	</div>
</section>

<style>
	.chev-container {
		--_chevron-color: var(--white-smoke);
	}

	.large-bg {
		min-height: var(--_component-height);
		background-color: #0000;
		background-image: linear-gradient(transparent, transparent), var(--_background-img);
		background-position:
			0 0,
			0 var(--_top);
		background-repeat: repeat, no-repeat;
		background-size: auto, cover;
		background-attachment: scroll, fixed;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		color: var(--white-smoke);
		padding-bottom: 3em;
		padding-inline: 4em;
	}

	.large-bg h1 {
		text-align: center;
		width: 100%;
	}

	@media (max-width: 750px) {
		.large-bg h1 {
			font-size: 44px;
		}

		.large-bg {
			background-size: auto 100vh;
		}
	}

	@supports (-webkit-touch-callout: none) {
		.large-bg {
			background-position:
				0 0,
				0 calc(var(--_top) * -1);
		}
	}

	@media (min-width: 750px) {
		.large-bg h1 {
			text-align: left;
		}
	}

	@media (min-width: 1000px) {
		.large-bg {
			background-image: linear-gradient(#29213a8f, #29213a8f), var(--_background-img);
		}
	}
</style>
