<script>
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import SocialFooter from '$lib/components/SocialFooter/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.pageContent, blank));

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.pageContent, blank);
	});

	//$inspect('Page data from page content: ', pageData);
</script>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-base: {pageData?.content?.background_color?.base?.value};
		--_gradient-upper: {pageData?.content?.background_color?.upper?.value};
		--_gradient-lower: {pageData?.content?.background_color?.lower?.value};"
>
	<Editor bind:pageData bind:reset />
	<div class="content">
		<div class="general-content">
			{#if pageData?.content.general_content.upper}
				{@html JSON.parse(pageData?.content.general_content.upper)?.html}
			{/if}
		</div>

		<div class="main-button">
			<MainButton href={'/'} label={pageData?.content?.button?.label} />
		</div>

		<div class="general-content">
			{#if pageData?.content.general_content.middle}
				{@html JSON.parse(pageData?.content.general_content.middle)?.html}
			{/if}
		</div>

		<hr />

		<div class="general-content">
			{#if pageData?.content.general_content.lower}
				{@html JSON.parse(pageData?.content.general_content.lower)?.html}
			{/if}
		</div>
		<SocialFooter />
	</div>
</section>

<style>
	section {
		position: relative;
		--_footer-padding: 2.5em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--_footer-padding);
		padding-top: calc(var(--_footer-padding) + 10vh);
		min-height: fit-content;
		height: var(--_component-height, 90vh);
		background:
			linear-gradient(172deg, var(--_gradient-upper) 36%, var(--_gradient-lower)),
			var(--_background-base);
	}

	.main-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 10vh;
	}

	.content {
		width: 100%;
	}

	.general-content {
		margin-top: 1em;
		padding-bottom: 2em;
	}

	@media (min-width: 600px) {
		section {
			--_footer-padding: 4em;
			padding: var(--_footer-padding);
			padding-top: calc(3em * 2);
		}

		.content {
			width: 90%;
			max-width: 950px;
		}
	}
</style>
