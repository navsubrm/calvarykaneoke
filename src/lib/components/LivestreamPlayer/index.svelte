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
		console.log(index, pageData?.content?.streams.length);
		if (index < pageData?.content?.streams.length - 1) {
			index += 1;
		} else {
			index = 0;
		}
	}
</script>

<svelte:head>
	<meta property="og:url" content="https://www.jdfarag.org/livestream/primary" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Calvary Kaneohe Livestream" />
	<meta property="og:description" content="JD is live! Come check it out." />
	<meta property="og:image" content="https://www.jdfarag.org/images/JD_duotone_1.webp" />
</svelte:head>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-base: {pageData?.content?.background_color};
		--_gradient-upper: {pageData?.content?.gradient_upper};
		--_gradient-lower: {pageData?.content?.gradient_lower};"
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
		<div class="component-footer">
			<div class="share-items">
				<p>Share:</p>
				<span class="facebook">
					<a
						aria-label="Share on Facebook"
						href="https://www.facebook.com/sharer/sharer.php?u=https://www.yourwebsite.com/your-specific-page"
						target="_blank"
					>
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							enable-background="new 0 0 24 24"
							xml:space="preserve"
							class="eapps-social-share-buttons-item-icon"
						>
							<path
								fill="%233E68C0"
								d="M5.677,12.998V8.123h3.575V6.224C9.252,2.949,11.712,0,14.736,0h3.94v4.874h-3.94 c-0.432,0-0.934,0.524-0.934,1.308v1.942h4.874v4.874h-4.874V24H9.252V12.998H5.677z"
							></path>
						</svg>
					</a>
				</span>
				<span class="x-twitter">
					<a
						aria-label="Share on X"
						class="twitter-share-button"
						href="https://twitter.com/intent/tweet?text=JD%20Farag%20is%20live%20@%20https://www.jdfarag.org/live"
						data-size="large"
						target="_blank"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="eapps-social-share-buttons-item-icon"
						>
							<path
								d="M17.4636 3.40479H20.3771L14.012 10.6865L21.5 20.5953H15.637L11.0448 14.5857L5.79041 20.5953H2.87519L9.68324 12.8067L2.5 3.40479H8.51187L12.6628 8.89781L17.4636 3.40479ZM16.4411 18.8498H18.0555L7.63466 5.0586H5.90226L16.4411 18.8498Z"
								fill="white"
							></path>
						</svg>
					</a>
				</span>
				<span class="email">
					<a
						aria-label="Share with Email"
						href="mailto:?subject=JD%20Is%20Live!%20Come%20check%20it%20out&body=Go%20to%3A%20https%3A%2F%2Fwww.jdfarag.org%2Flive"
						target="_blank"
					>
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							enable-background="new 0 0 24 24"
							xml:space="preserve"
							class="eapps-social-share-buttons-item-icon"
						>
							<path
								d="M23.674,3.741c-0.338-0.495-0.907-0.823-1.549-0.823H1.876c-0.629,0-1.184,0.316-1.525,0.794l11.687,9.745 L23.674,3.741z"
							></path>
							<path
								d="M12.037,16.409L0,6.371v12.836c0,1.031,0.844,1.875,1.875,1.875h20.249c1.031,0,1.875-0.844,1.875-1.875 V6.421L12.037,16.409z"
							></path>
						</svg>
					</a>
				</span>
			</div>

			<div class="share-items abc-link">
				<p>ABC PDFs & Transcripts:</p>
				<button class="button">ABC PDFs</button>
			</div>
		</div>
	</div>
</section>

<style type="text/css">
	section {
		--_padding: 2.5em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--_padding);
		padding-top: calc(var(--_padding) + 10vh);
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

	.component-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 1.5em;
	}

	.share-items {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}

	.component-footer p {
		font-family:
			Open Sans,
			sans-serif;
		font-weight: 700;
		color: var(--darkness);
		font-size: 14px;
	}

	.share-items span {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--darkness);
		width: 40px;
		height: 40px;
		border-radius: 0.25em;
		transition: all 0.2s linear;
	}

	.share-items svg {
		fill: var(--floral-white);
		height: 15px;
		width: 15px;
	}

	.facebook:hover {
		background: #1877f2;
		opacity: 0.5;
	}

	.x-twitter:hover {
		opacity: 0.5;
	}

	.email:hover {
		background: var(--gold);
		opacity: 0.8;
	}

	@media (min-width: 600px) {
		section {
			--_padding: 4em;
			padding: var(--_padding);
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
