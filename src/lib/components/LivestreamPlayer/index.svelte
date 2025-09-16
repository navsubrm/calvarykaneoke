<script lang="ts">
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';
	import SocialFooter from '../SocialFooter/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.liveStream, blank));
	let streamPlayer: HTMLIFrameElement | undefined = $state();
	let index = $state(0);

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.liveStream, blank);
	});

	$inspect('Page data from livestream: ', pageData);

	function checkAlternateSources() {
		if (!streamPlayer) return;
		console.log(index, pageData?.content?.streams.length);
		if (index < pageData?.content?.streams.length - 1) {
			index += 1;
		} else {
			index = 0;
		}
	}
</script>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-base: {pageData?.content?.background_color?.value};
		--_gradient-upper: {pageData?.content?.gradient_upper?.value};
		--_gradient-lower: {pageData?.content?.gradient_lower?.value};"
>
	<Editor bind:pageData bind:reset />
	<div class="content">
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

		<div class="title-block">
			<h3>JD Farag Live Stream Schedule</h3>
			<button class="button" onclick={checkAlternateSources}
				>Watch {pageData?.content?.streams[
					index < pageData?.content?.streams.length - 1 ? index + 1 : 0
				].title} Livestream</button
			>
		</div>
		<div class="general-content">
			{#if pageData?.content.general_content}
				{@html JSON.parse(pageData?.content.general_content)?.html}
			{/if}
		</div>
		<SocialFooter />
	</div>
</section>

<style type="text/css">
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
			linear-gradient(172deg, var(--_gradient-upper) 42%, var(--_gradient-lower)),
			var(--_background-base);
	}

	.content {
		width: 100%;
	}

	.vid-container {
		position: relative;
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.video {
		padding-top: 1.5%;
		padding-left: 10%;
		padding-right: 10%;
	}

	.title-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1em;
		align-items: center;
		width: 100%;
		margin-top: 2em;
		font-family:
			Tenor Sans,
			sans-serif;
	}

	.button {
		display: flex;
		background: white;
		color: var(--gold);
		letter-spacing: 1px;
		text-transform: uppercase;
		vertical-align: middle;
		background-color: var(--floral-white);
		border: 1px solid var(--gold);
		justify-content: center;
		align-items: stretch;
		padding: 10px 13px 10px 15px;
		font-size: 12px;
		transition: all 0.25s linear;
		text-decoration: none;
	}

	.button:hover {
		background: var(--deep-purple);
		color: var(--floral-white);
		border: solid 0.25px var(--deep-purple);
	}

	.general-content {
		margin-top: 1em;
		border-bottom: solid 1px var(--deep-purple);
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

	@media (min-width: 1000px) {
		.title-block {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
