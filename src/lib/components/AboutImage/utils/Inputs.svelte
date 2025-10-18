<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>General</legend>
	<div class="input">
		<General
			name="about_image_title"
			label="Title"
			placeholder="Enter the title for the about JD section."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.about_image?.title}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Content</legend>
	<div class="editor">
		<QuillInput
			name="about_image_content"
			label="About Content"
			placeholder="Enter the content for the about JD section."
			themeBase={'One'}
			value={pageData?.content?.about_image?.content}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Image Items</legend>

	<div class="input">
		<General
			name="about_image_image_src"
			label="About Image Source URL"
			placeholder="Enter the url for the image."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.about_image?.image?.src}
		/>
	</div>
	<div class="editor">
		<General
			name="about_image_image_alt"
			label="About Image Alt text"
			placeholder="Enter the alt text for the image."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.about_image?.image?.alt}
		/>
	</div>
</fieldset>
