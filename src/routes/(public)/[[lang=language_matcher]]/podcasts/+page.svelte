<script lang="ts">
	import { page } from '$app/state';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Podcasts';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';
	import GradientSection from '$lib/components_style/GradientSection/Index.svelte';
	import GeneralContent from '$lib/components_style/GeneralContent/Index.svelte';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

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

<EditorNotice bind:editor />
<GradientSection Children={contentStyling} bind:data={pageData.content.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} />
	{#snippet content()}
		<h3>Check out recent Podcasts</h3>

		{#if page?.data?.r2Objects?.length > 0}
			<div class="player">
				<div class="playlist">
					{#each page?.data?.r2Objects as { language, title, date, audio }}
						<div class="sub-text-container">
							<div class="audio-header">
								<h5>Title: {title}</h5>
								<small>Language: {language.toUpperCase()} / Date Recorded: {date}</small>
							</div>
							<MainButton href={audio} label="Download" />
						</div>
						<audio controls src={audio} preload="none"></audio>
					{/each}
				</div>
			</div>
		{:else}
			<p>Bucket is empty.</p>
		{/if}
	{/snippet}
{/snippet}

<style>
	:global(section) {
		justify-content: flex-start;
		align-items: flex-start;
	}

	:global(.content-style-container) {
		height: 100%;
	}

	audio {
		width: 100%;
		background: transparent;
	}

	.player {
		color: var(--floral-white);
		background: linear-gradient(to bottom, var(--midnight-blue) 0% 10%, transparent);
		border-radius: 8px;
	}

	.playlist {
		padding: 1rem;
	}

	.sub-text-container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.audio-header {
		margin-bottom: 20px;
	}
</style>
