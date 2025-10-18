<script lang="ts">
	import { page } from '$app/state';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Home';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import SocialFooter from '$lib/components/SocialFooter/index.svelte';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';
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

	$inspect('Page data from exemption: ', pageData);
</script>

<EditorNotice bind:editor />
<GradientSection Children={contentStyling} bind:data={pageData.content.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} contentWidth={pageData?.content?.max_width} />
	{#snippet content()}
		<div>
			<GeneralContentBlock
				data={pageData?.content?.general_content?.upper}
				classes={'general-content'}
			/>

			<div class="main-button">
				<MainButton
					href={pageData?.content?.button?.href}
					label={pageData?.content?.button?.label}
				/>
			</div>

			<GeneralContentBlock
				data={pageData?.content?.general_content?.middle}
				classes={'general-content'}
			/>

			<hr />

			<GeneralContentBlock
				data={pageData?.content?.general_content?.lower}
				classes={'general-content'}
			/>

			<SocialFooter bind:pageData />
		</div>
	{/snippet}
{/snippet}

<style>
	.main-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 10vh;
	}
</style>
