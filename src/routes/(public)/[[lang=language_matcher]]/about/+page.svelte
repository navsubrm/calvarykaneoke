<script lang="ts">
	import { page } from '$app/state';
	//import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import SocialFooter from '$lib/components/SocialFooter/index.svelte';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/About';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';
	import AboutMain from '$lib/components/AboutMain/index.svelte';
	import GradientSection from '$lib/components_style/GradientSection/Index.svelte';
	import GeneralContent from '$lib/components_style/GeneralContent/Index.svelte';

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

	$inspect('Page data from About: ', pageData);
</script>

<svelte:head>
	<title>{pageData?.meta_data?.title}</title>
</svelte:head>

<EditorNotice bind:editor />
<AboutMain bind:pageData />
<GradientSection Children={contentStyling} data={pageData?.content?.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} />
	{#snippet content()}
		<div class="image-content-flex">
			<img src="/images/JD_Revised2_1.webp" alt="/JD Sitting in a chair" />
			<div>
				<h2>About JD Farag</h2>
				<p>
					JD Farag was born in Beirut, Lebanon to an Egyptian father and Arab mother. He immigrated
					to America in 1963. In 1988, JD married his wife, Kellie, in Spokane, WA and later moved
					to Hawaii where they started their first Bible Study in 2004. As a strong supporter of
					Israel, JD's focus is on Bible Prophecy, oftentimes pertaining to the Middle East. In
					addition to weekly Prophecy Updates, Pastor JD teaches through the bible Sunday mornings
					and Thursday evenings at his church in Kaneohe, HI. JD and Kellie currently live on the
					windward side of Oahu with their three children Elias, Levi, and Sabia.
				</p>
			</div>
		</div>
		<SocialFooter bind:pageData />
	{/snippet}
{/snippet}

<style>
	.image-content-flex {
		display: block;
	}

	.image-content-flex > * {
		margin-block: 20px;
	}

	.image-content-flex img {
		width: 100%;
		max-width: 600px;
		aspect-ratio: auto;
		height: auto;
	}

	.image-content-flex div p {
		margin-block: 20px;
	}

	@media (min-width: 800px) {
		.image-content-flex img {
			float: left;
			margin-right: 20px;
		}
	}

	@media (min-width: 1200px) {
		.image-content-flex {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: stretch;
			gap: 2em;
		}
	}
</style>
