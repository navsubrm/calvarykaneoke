<script lang="ts">
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.largeImageLink, blank));

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.largeImageLink, blank);
	});
</script>

<section class="container" style="--_component-height: {pageData?.content?.component_height}vh;">
	<Editor bind:pageData bind:reset />
	<div class="upper-content-area">
		{#if pageData?.content?.main_image}
			<a href={pageData?.content?.main_image?.href}>
				<img src={pageData?.content?.main_image.url} alt={pageData?.content?.main_image?.alt} />
				<div class="title-date-div-large-2">
					<h4 class="h4-name-2">{pageData?.content?.main_image?.alt}</h4>
					<p class="date-text-div-2">Click To View</p>
				</div>
			</a>
		{/if}
	</div>
</section>

<style>
	section {
		position: relative;
		min-height: fit-content;
		height: var(--_component-height);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 3em;
		align-items: center;
		background: var(--darkness);
	}

	section :global(:where(a, a:visited)) {
		color: inherit;
	}

	.upper-content-area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1 1 0;
	}

	.upper-content-area {
		width: 75%;
		padding-block: 3em;
		max-width: 1000px;
	}

	.title-date-div-large-2 {
		width: 100%;
		background-color: #82621f;
		padding: 20px;
	}

	.title-date-div-large-2 h4 {
		color: #f5f5f5;
		width: 100%;
		margin-top: 0;
		margin-bottom: 0;
		font-family:
			Open Sans,
			sans-serif;
		font-weight: 600;
		line-height: 28px;
	}

	.date-text-div-2 {
		color: #f5f5f5;
		margin-top: 5px;
		margin-bottom: 0;
		font-family:
			Open Sans,
			sans-serif;
		font-size: 13px;
	}

	@media (max-width: 991px) {
		.upper-content-area {
			width: 88%;
		}
	}

	.upper-content-area a,
	.upper-content-area img {
		width: 100%;
	}

	.upper-content-area a {
		position: relative;
		border: solid 1px var(--dim-grey);
		text-decoration: none;
	}
</style>
