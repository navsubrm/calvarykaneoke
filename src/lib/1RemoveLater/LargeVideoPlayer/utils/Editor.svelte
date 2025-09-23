<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import { colorArray } from '$lib/config/colorArray';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Large Video');
	//let streamCount = $derived(pageData?.content?.streams.length.toString());
</script>

<ContentEditorPanel {buttonTitle} action={'?/set-livestream'} children={contentEditor} bind:reset />

{#snippet contentEditor()}
	<input type="hidden" name="component_type" value={'Large Video Player'} />
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
			<General
				name="background_image"
				label="background Image URL"
				placeholder="Enter the URL of the background image."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.background_image.url}
			/>
		</div>

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
				name="gradient_middle"
				label="Gradient middle Color"
				placeholder="Select the middle gradient color."
				required={true}
				themeBase={'One'}
				multiple={false}
				items={colorArray}
				bind:value={pageData.content.gradient_middle}
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
		<legend>General Content Upper:</legend>

		<div class="editor">
			<QuillInput
				name="content_upper"
				label="Provide Upper Content"
				placeholder="Enter the content you want displayed above the livestream."
				themeBase={'One'}
				bind:value={pageData.content.upper_content}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Video Information: </legend>
		<div class="input">
			<General
				name="video_src"
				label="Video Source"
				placeholder="Enter the Video iFrame URL."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.video.src}
			/>
		</div>
		<div class="editor">
			<General
				name="video_title"
				label="Video Title"
				placeholder="Enter the title of the video."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.video.title}
			/>
		</div>
		<div class="editor">
			<General
				name="video_author"
				label="Video Author"
				placeholder="Enter the author of the video."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.video.author}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>General Content Lower:</legend>

		<div class="editor">
			<QuillInput
				name="content_lower"
				label="Provide Lower Content"
				placeholder="Enter the content you want displayed below the video."
				themeBase={'One'}
				bind:value={pageData.content.lower_content}
			/>
		</div>
	</fieldset>
{/snippet}
