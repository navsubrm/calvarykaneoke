<script lang="ts">
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import SocialFooter from '$lib/components/SocialFooter/index.svelte';
	import blank from './utils/blank';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.pageContent, blank));

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.pageContent, blank);
	});

	//$inspect('Page data from livestream: ', pageData);
</script>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-img: url({pageData?.content?.background_image?.url});
		--_background-base: {pageData?.content?.background_color?.value};
		--_gradient-upper: {pageData?.content?.gradient_upper?.value};
		--_gradient-middle: {pageData?.content?.gradient_middle?.value};
		--_gradient-lower: {pageData?.content?.gradient_lower?.value};"
>
	<Editor bind:pageData bind:reset />

	<div class="content">
		<div class="general-content upper">
			{#if pageData?.content?.upper_content}
				{@html JSON.parse(pageData?.content?.upper_content)?.html}
			{/if}
		</div>

		<div class="vid-container">
			<div class="video">
				<iframe
					title={pageData?.content?.video.title}
					src={pageData?.content?.video.src}
					style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
					allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
					allowfullscreen
				></iframe>
			</div>
		</div>
		<div class="video-footer">
			<MainButton label={'SEND POSTCARD'} href={pageData?.content?.video.footer.url} />
			<!-- <a href={pageData?.content?.video.footer.url} target="_blank" class="button">SEND POSTCARD</a> -->
			<p>SEND SOMEONE THE ABC'S OF SALVATION</p>
		</div>

		<div class="general-content lower">
			{#if pageData?.content?.upper_content}
				{@html JSON.parse(pageData?.content?.lower_content)?.html}
			{/if}
		</div>

		<div class="flex-content">
			<img src="/images/1Asset-10A3.svg" alt="The letter A" />
			<div class="content_text">
				{#if pageData?.content?.abc.a}
					{@html JSON.parse(pageData?.content?.abc.a)?.html}
				{/if}
			</div>
		</div>
		<div class="flex-content">
			<img src="/images/1Asset-11B3.svg" alt="The letter A" />
			<div class="content_text">
				{#if pageData?.content?.abc.b}
					{@html JSON.parse(pageData?.content?.abc.b)?.html}
				{/if}
			</div>
		</div>
		<div class="flex-content">
			<img src="/images/1Asset-12C3.svg" alt="The letter A" />
			<div class="content_text">
				{#if pageData?.content?.abc.c}
					{@html JSON.parse(pageData?.content?.abc.c)?.html}
				{/if}
			</div>
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
		padding-block: calc(var(--_footer-padding) + 10vh);
		min-height: fit-content;
		height: var(--_component-height, 110vh);
		background-color: var(--darkness);
		background:
			linear-gradient(
				to bottom,
				var(--darkness) 6vh,
				var(--_gradient-upper) 23%,
				var(--_background-base) 40%,
				var(--_gradient-middle) 70%,
				var(--_gradient-lower) 95%
			),
			url('https://cdn.prod.website-files.com/5f46cf5d74e850f5d3394bdd/5fe14a4d3bc1f21255ed1b9a_ABC_ARTWORK.jpg');
		background-position:
			0 0,
			50% 0%;
		background-repeat: repeat, no-repeat;
		background-size: 100%, auto;
	}

	.content {
		width: 100%;
	}

	.vid-container {
		position: relative;
		aspect-ratio: 16 / 9;
		width: 100%;
		border-top: solid 0.5px var(--floral-white);
	}

	.vid-container,
	.video-footer {
		border-left: solid 0.5px var(--floral-white);
		border-right: solid 0.5px var(--floral-white);
	}

	.video-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 1em;
		background: var(--gold);
		color: var(--floral-white);
		border-bottom: solid 0.5px var(--floral-white);
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
		font-size: 17px;
		transition: all 0.25s linear;
		text-decoration: none;
	}

	a:where(.button) {
		font-family: 'Open Sans', sans-serif;
	}

	.button:hover {
		background: var(--deep-purple);
		color: var(--floral-white);
		border: solid 0.25px var(--deep-purple);
	}

	.video {
		padding-top: 1.5%;
		padding-left: 10%;
		padding-right: 10%;
	}

	.general-content {
		margin-top: 1em;
		padding-bottom: 2em;
	}

	.upper {
		margin-block: 10vh;
	}

	.lower {
		margin-top: 10vh;
	}

	.flex-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		color: var(--floral-white);
		line-height: 22px;
		margin-block: 1em;
	}

	.flex-content img {
		max-width: 60px;
		margin-right: 10px;
		padding-top: 5px;
		margin-block: 1em;
	}

	@media (max-width: 750px) {
		.upper :global(> *),
		.lower :global(> *),
		.flex-content :global(> *) {
			font-size: 0.98rem;
		}
	}

	@media (min-width: 800px) {
		.upper {
			margin-block: 25vh;
		}

		.lower {
			margin-top: 10vh;
		}

		.flex-content {
			flex-wrap: nowrap;
		}
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
			margin-bottom: 20vh;
		}
	}
</style>
