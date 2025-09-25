<script lang="ts">
	import ContentEditorPanel from '$lib/userInputs/contentEditorPanel/ContentEditorPanel.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import { colorArray } from '$lib/config/selectInputOptionArrays';

	let { pageData = $bindable(), reset = $bindable(false) } = $props();

	const buttonTitle = $state('Edit Social Footer Information');
</script>

<ContentEditorPanel
	{buttonTitle}
	action={'?/set-social-footer'}
	children={contentEditor}
	bind:reset
/>

{#snippet contentEditor()}
	<input type="hidden" name="component_type" value={'Social Footer'} />
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

	<fieldset>
		<legend>General Settings:</legend>

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
	</fieldset>

	<fieldset>
		<legend>X Post Share Content:</legend>

		<div class="editor">
			<General
				name="x_post_text"
				label="X Post Content"
				placeholder="Enter the content you want displayed when the page is shared on X."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.x_post_text}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Facebook Share link: </legend>
		<div class="input">
			<General
				name="facebook_share_link"
				label="Select the number of available streams"
				placeholder="Enter the number of available streams."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.facebook_share_link}
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend>Mail To Content: </legend>
		<div class="editor">
			<General
				name="mail_to_subject"
				label="Mail to Subject Line: "
				placeholder="Enter the prepopulated email subject line."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.mail_to.subject}
			/>
		</div>
		<div class="editor">
			<General
				name="mail_to_body"
				label="Mail to Body Text: "
				placeholder="Enter the content you want to auto populate the link email."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.content.mail_to.body}
			/>
		</div>
	</fieldset>
{/snippet}
