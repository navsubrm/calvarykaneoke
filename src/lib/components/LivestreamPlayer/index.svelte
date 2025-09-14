<script lang="ts">
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.liveStream, blank));
	let streamPlayer: HTMLIFrameElement | undefined = $state();
	let index = $state(0);

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.liveStream, blank);
	});

	function checkAlternateSources() {
		if (!streamPlayer) return;
		console.log(index);
		if (index >= pageData?.content?.streams.length) return (index = 0);
		return (index += 1);
	}
</script>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-color: {pageData?.content?.background_color};"
>
	<Editor bind:pageData bind:reset />
	<div class="vid-container">
		<div class="video">
			{#key index}
				<iframe
					bind:this={streamPlayer}
					title={pageData?.content?.streams[index].title}
					src={pageData?.content?.streams[index].src}
					style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
					allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
					allowfullscreen
				></iframe>
			{/key}
		</div>
	</div>
	<div>
		{#key index}
			<button onclick={checkAlternateSources}>Next {pageData?.content?.streams[index].title}</button
			>
			<button onclick={checkAlternateSources}>Prev {pageData?.content?.streams[index].title}</button
			>
		{/key}
	</div>
</section>

<style type="text/css">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 6% 3% 10%;
		min-height: fit-content;
		height: var(--_component-height, 90vh);
		background-color: var(--_background-color);
	}

	.vid-container {
		position: relative;
		aspect-ratio: 16 / 9;
		width: 100%;
		max-width: 950px;
	}

	.video {
		padding-top: 1.5%;
		padding-left: 10%;
		padding-right: 10%;
	}

	button {
		background: white;
		border: none;
	}

	/* linear-gradient(172deg, #d2cbbbe6 42%, var(--deep-purple)) */

	/* div.vid-player {
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 56.25%;
	}
	div.vid-player > iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	} */
</style>
