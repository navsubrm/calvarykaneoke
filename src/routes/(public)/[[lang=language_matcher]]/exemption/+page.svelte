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

<EditorNotice bind:editor />

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-base: {pageData?.content?.background_color?.base?.value ||
		pageData?.content?.background_color?.base};
		--_gradient-upper: {pageData?.content?.background_color?.upper?.value ||
		pageData?.content?.background_color?.upper};
		--_gradient-lower: {pageData?.content?.background_color?.lower?.value ||
		pageData?.content?.background_color?.lower};"
>
	<div class="content">
		<GeneralContentBlock
			data={pageData?.content?.general_content?.upper}
			classes={'general-content'}
		/>

		<div class="main-button">
			<MainButton href={'/'} label={pageData?.content?.button?.label} />
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
</section>

<style>
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
			linear-gradient(172deg, var(--_gradient-upper) 36%, var(--_gradient-lower)),
			var(--_background-base);
	}

	.main-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 10vh;
	}

	.content {
		width: 100%;
	}

	.general-content {
		margin-top: 1em;
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
