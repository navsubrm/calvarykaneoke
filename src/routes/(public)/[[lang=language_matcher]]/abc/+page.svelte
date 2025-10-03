<script lang="ts">
	import { page } from '$app/state';
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer/index.svelte';
	import SocialFooter from '$lib/components/SocialFooter/index.svelte';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Abc';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();

	//Check for edit mode, initiate, update URL to hide session id and start editor.
	onMount(() => {
		if (page?.data?.editor?.mode == 'edit') {
			page?.url.searchParams.delete('mode');
			page?.url.searchParams.delete('edit-id');
			goto(page?.url?.href, { replaceState: true });
			editor = new BroadcastChannel(`edit-${page?.data?.editor?.id}`);
			editor.postMessage({ type: 'ready' });
			editor.onmessage = (e: MessageEvent) => (pageData = JSON.parse(e.data.payload.message));
		}
	});

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.page, blank);
	});

	onDestroy(() => editor?.close());

	$inspect('Page data from Abcs: ', pageData);
</script>

<svelte:head>
	<title>{pageData?.meta_data?.title}</title>
</svelte:head>

<EditorNotice bind:editor />
<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-img: url({pageData?.content?.background_image?.url});
		--_background-base: {pageData?.content?.background_color?.value ||
		pageData?.content?.background_color};
		--_gradient-upper: {pageData?.content?.gradient_upper?.value || pageData?.content?.gradient_upper};
		--_gradient-middle: {pageData?.content?.gradient_middle?.value ||
		pageData?.content?.gradient_middle};
		--_gradient-lower: {pageData?.content?.gradient_lower?.value || pageData?.content?.gradient_lower};"
>
	<div class="content">
		<GeneralContentBlock
			data={pageData?.content?.upper_content}
			classes={'general-content upper'}
		/>
		<VideoPlayer {pageData} />
		<GeneralContentBlock
			data={pageData?.content?.upper_content}
			classes={'general-content lower'}
		/>
		{@render abcImageFlex('/images/1Asset-10A3.svg', 'The letter A', pageData?.content?.abc?.a)}
		{@render abcImageFlex('/images/1Asset-11B3.svg', 'The letter B', pageData?.content?.abc?.b)}
		{@render abcImageFlex('/images/1Asset-12C3.svg', 'The letter C', pageData?.content?.abc?.c)}
		<SocialFooter {pageData} />
	</div>
</section>

{#snippet abcImageFlex(src: string, alt: string, data: string)}
	<div class="flex-content">
		<img {src} {alt} />
		<GeneralContentBlock {data} classes={'content_text'} />
	</div>
{/snippet}

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

	.content :global(.general-content) {
		margin-top: 1em;
		padding-bottom: 2em;
	}

	.content :global(.upper) {
		margin-block: 10vh;
	}

	.content :global(.lower) {
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
		.content :global(.upper > *),
		.content :global(.lower > *),
		.flex-content :global(> *) {
			font-size: 0.98rem;
		}
	}

	@media (min-width: 800px) {
		.content :global(.upper) {
			margin-block: 25vh;
		}

		.content :global(.lower) {
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
