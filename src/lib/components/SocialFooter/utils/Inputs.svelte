<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import colorSelectOptions from '$lib/config/optionArrays/colorSelectOptions';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>General Settings:</legend>

	<div class="input">
		<General
			name="social_footer_component_height"
			label="Select the component height"
			placeholder="Enter the portion of the screen the component should take up when in view"
			type={'number'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.social_footer?.component_height}
		/>
	</div>

	<div class="input">
		<SelectInput
			name="social_footer_background_color"
			label="Background Color"
			placeholder="Select the background base color."
			required={true}
			themeBase={'One'}
			multiple={false}
			items={colorSelectOptions}
			value={pageData?.content?.social_footer?.background_color}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>X Post Share Content:</legend>

	<div class="editor">
		<General
			name="social_footer_x_post_text"
			label="X Post Content"
			placeholder="Enter the content you want displayed when the page is shared on X."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.social_footer?.x_post_text}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Facebook Share link: </legend>
	<div class="input">
		<General
			name="social_footer_facebook_share_link"
			label="Select the number of available streams"
			placeholder="Enter the number of available streams."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.social_footer?.facebook_share_link}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Mail To Content: </legend>
	<div class="editor">
		<General
			name="social_footer_mail_to_subject"
			label="Mail to Subject Line: "
			placeholder="Enter the prepopulated email subject line."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.social_footer?.mail_to?.subject}
		/>
	</div>
	<div class="editor">
		<General
			name="social_footer_mail_to_body"
			label="Mail to Body Text: "
			placeholder="Enter the content you want to auto populate the link email."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.social_footer?.mail_to?.body}
		/>
	</div>
</fieldset>
