<script lang="ts">
	import { page } from '$app/state';
	// import Editor from './utils/Editor.svelte';
	import ChevronAnimation from '../[[lang]]/(public)/(home)/utils/Hero/utils/ChevronAnimation.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import { onDestroy, onMount } from 'svelte';
	import blank from './utils/blank';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.hero, blank));
	let editor: BroadcastChannel | undefined = $state();

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.hero, blank);
	});

	onMount(() => {
		editor = new BroadcastChannel('edit-channel');
		if (editor)
			editor.onmessage = (e: MessageEvent) => {
				if (e.data.type == 'init')
					editor?.postMessage({ type: 'pageData', payload: { message: JSON.stringify(pageData) } });
				if (e.data.type == 'update') pageData = JSON.parse(e.data.payload.message);
			};
	});

	onDestroy(() => {
		if (editor) editor.close();
	});
</script>

<!-- Hero Section -->
<section style="--_background-img: url({pageData?.content?.background_image_url});">
	<a href={`${page.url.href}/edit`} target="_blank">Edit</a>
	<!-- <Editor bind:pageData bind:reset /> -->
	<div class="main-content">
		{#if pageData?.content?.hero_icon_content}
			<div class="title-header-icon">
				<h3>{pageData?.content?.hero_icon_content}</h3>
			</div>
		{/if}

		{#if pageData?.content?.hero_title_content}
			<div class="main-title">
				<h1>{pageData?.content?.hero_title_content}</h1>
			</div>
		{/if}

		{#if pageData?.content?.sub_title_left && pageData?.content?.sub_title_right}
			<div class="sub-title">
				<div class="sub-title-a">
					{@html JSON.parse(pageData?.content?.sub_title_left)?.html}
				</div>
				<div class="sub-title-b">
					{@html JSON.parse(pageData?.content?.sub_title_right)?.html}
				</div>
			</div>
		{/if}
	</div>
	<ChevronAnimation />
</section>

<!-- Large Sermon Image -->
<section class="container" style="--_component-height: {pageData?.content?.component_height}vh;">
	<!-- <Editor bind:pageData bind:reset /> -->
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
	section,
	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
	}

	section {
		position: relative;
		min-height: 100vh;
		padding: 1em;
		background-image:
			linear-gradient(to bottom, #0000 25%, #24211cba 50%, #24211c), var(--_background-img);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title-header-icon {
		padding-inline: 1.5em;
		padding-block: 0.75em;
		color: var(--white);
		background: linear-gradient(
			145deg,
			color-mix(in lab, var(--deep-purple), transparent 15%),
			color-mix(in lab, var(--burlywood), transparent 35%)
		);
		max-width: 50ch;
		text-wrap: wrap;
	}

	.main-title {
		text-align: center;
		color: var(--white);
	}

	.sub-title {
		display: flex;
		flex-direction: column;
		font-size: 1em;
		color: var(--white);
		text-align: center;
	}

	.sub-title :global(:where(a, a:visited)) {
		flex-wrap: wrap;
		color: var(--white);
		flex-basis: 0;
		flex-grow: 1;
	}

	.sub-title-a,
	.sub-title-b {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		padding-inline: 1.5em;
		padding-block: 1em;
		width: 50%;
		flex-grow: 1;
		flex-shrink: 0;
	}

	.sub-title-a {
		border-bottom: solid 1px var(--burlywood);
	}

	section :global(a:hover) {
		color: var(--burlywood);
	}

	@media (min-width: 800px) {
		section {
			background-image: linear-gradient(#0000 20%, #24211cba 82%, #24211c), var(--_background-img);
		}

		.main-content {
			z-index: 0;
		}

		.sub-title {
			flex-direction: row;
			width: 100%;
		}

		.sub-title-a,
		.sub-title-b {
			padding-block: 0.5em;
		}

		.sub-title-a {
			border-bottom: none;
			border-right: solid 1px var(--burlywood);
		}
	}
</style>
