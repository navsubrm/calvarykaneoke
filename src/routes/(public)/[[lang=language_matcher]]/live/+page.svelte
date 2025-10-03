<script lang="ts">
	import { page } from '$app/state';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Live';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import SocialFooter from '$lib/components/SocialFooter/index.svelte';
	import LivestreamPlayer from '$lib/components/LivestreamPlayer/index.svelte';

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
</script>

<svelte:head>
	<title>{pageData?.meta_data?.title}</title>
</svelte:head>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-base: {pageData?.content?.background_color ||
		pageData?.content?.background_color?.value};
		--_gradient-upper: {pageData?.content?.gradient_upper || pageData?.content?.gradient_upper?.value};
		--_gradient-lower: {pageData?.content?.gradient_lower || pageData?.content?.gradient_lower?.value};"
>
	<div class="content">
		<LivestreamPlayer bind:pageData />

		<div class="general-content">
			{#if pageData?.content.general_content}
				{@html JSON.parse(pageData?.content.general_content)?.html}
			{/if}
		</div>
		<SocialFooter bind:pageData />
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

	.general-content {
		margin-top: 1em;
		/* border-bottom: solid 1px var(--deep-purple); */
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
