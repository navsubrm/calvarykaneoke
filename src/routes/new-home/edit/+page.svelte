<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import { onDestroy, onMount } from 'svelte';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();
	let editor: BroadcastChannel | undefined = $state();

	onMount(() => {
		editor = new BroadcastChannel('edit-channel');
		editor.postMessage({ type: 'init' });
		editor.onmessage = (e: MessageEvent) => (pageData = JSON.parse(e.data.payload.message));
	});

	$effect(() => {
		if (editor)
			editor.postMessage({ type: 'update', payload: { message: JSON.stringify(pageData) } });
	});

	onDestroy(() => {
		if (editor) editor.close();
	});
</script>

<section>
	{#if !pageData}
		<p>Loading...</p>
	{:else}
		<form method="POST" action="?/update-hero">
			<input type="hidden" name="component_type" value={'Hero'} />
			<div class="input">
				<General
					name="component_name"
					label="Component Name"
					placeholder="Enter the component name."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.component_name}
				/>
				<General
					name="background_image_url"
					label="Background Image URL"
					placeholder="Enter the URL for the background Image."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.content.background_image_url}
				/>
			</div>
			<div class="input">
				<General
					name="hero_icon_content"
					label="Hero Content"
					placeholder="Enter your Hero title content here."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.content.hero_icon_content}
				/>
			</div>
			<div class="input">
				<General
					name="hero_title_content"
					label="Hero Main Title"
					placeholder="Enter your Hero title content here."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.content.hero_title_content}
				/>
			</div>
			<div class="editor">
				<QuillInput
					name="sub_title_left"
					label="Sub Title Left"
					placeholder="Enter your Hero title content here."
					themeBase={'One'}
					bind:value={pageData.content.sub_title_left}
				/>
			</div>
			<div class="editor">
				<QuillInput
					name="sub_title_right"
					label="Sub Title Right"
					placeholder="Enter your Hero title content here."
					themeBase={'One'}
					bind:value={pageData.content.sub_title_right}
				/>
			</div>
		</form>
	{/if}
	<!-- {/snippet} -->
</section>

<style>
	section {
		padding-block: 10vh;
		padding-inline: 3em;
		height: 100vh;
		background: black;
	}
</style>
