<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import { colorArray } from '$lib/config/colorArray';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Large Image Link');
	let streamCount = $derived(pageData?.content?.streams.length.toString());
</script>

<ContentEditorPanel {buttonTitle} action={'?/set-livestream'} children={contentEditor} bind:reset />

{#snippet contentEditor()}
	<input type="hidden" name="component_type" value={'Live Stream'} />
	<div class="input">
		<General
			name="component_name"
			label="Add Component Name if new: "
			placeholder="If this is the first use of the component, provide a name for reference."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.component_name}
		/>
	</div>
	<div class="input">
		<General
			name="component_height"
			label="Select the component height"
			placeholder="Enter the portion of the screen the component should take up when in view"
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.component_height}
		/>
	</div>

	<fieldset>
		<legend>Background Settings:</legend>

		<div class="input">
			<SelectInput
				name="background_color"
				label="Background Color"
				placeholder="Select the background base color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorArray}
				bind:value={pageData.content.background_color}
			/>
		</div>
		<div class="input">
			<SelectInput
				name="gradient_upper"
				label="Gradient Upper Color"
				placeholder="Select the upper gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorArray}
				bind:value={pageData.content.gradient_upper}
			/>
		</div>
		<div class="input">
			<SelectInput
				name="gradient_lower"
				label="Gradient Lower Color"
				placeholder="Select the lower gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorArray}
				bind:value={pageData.content.gradient_lower}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>General Content:</legend>

		<div class="editor">
			<QuillInput
				name="general_content"
				label="Provide General Content"
				placeholder="Enter the content you want displayed below the livestream."
				themeBase={'One'}
				bind:value={pageData.content.general_content}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Stream Information: </legend>
		<div class="input">
			<General
				name="stream_count"
				label="Select the number of available streams"
				placeholder="Enter the number of available streams."
				type={'number'}
				required={true}
				themeBase={'One'}
				bind:value={streamCount}
			/>
		</div>
		{#each { length: Number(streamCount) }, i}
			<div class="editor">
				<General
					name="streams_title_{i}"
					label="Stream Title"
					placeholder="Enter the title of this stream."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.content.streams[i].title}
				/>
			</div>
			<div class="editor">
				<General
					name="streams_src_{i}"
					label="Stream Source Url"
					placeholder="Enter the url for the stream."
					type={'text'}
					required={true}
					themeBase={'One'}
					bind:value={pageData.content.streams[i].src}
				/>
			</div>
		{/each}
	</fieldset>
{/snippet}
