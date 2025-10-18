<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>General</legend>
	<div class="input">
		<General
			name="hero_background_image_url"
			label="Background Image URL"
			placeholder="Enter the URL for the background Image."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.hero?.background_image_url}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Centered Content</legend>

	<div class="input">
		<General
			name="hero_icon_content"
			label="Hero Content"
			placeholder="Enter your Hero title content here."
			type={'text'}
			required={true}
			themeBase={'One'}
			value={pageData?.content?.hero?.hero_icon_content}
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
			value={pageData?.content?.hero?.hero_title_content}
		/>
	</div>
</fieldset>
<fieldset>
	<legend>Sub Content</legend>

	<div class="editor">
		<QuillInput
			name="hero_sub_title_left"
			label="Sub Title Left"
			placeholder="Enter your Hero title content here."
			themeBase={'One'}
			value={pageData?.content?.hero?.sub_title_left}
		/>
	</div>
	<div class="editor">
		<QuillInput
			name="hero_sub_title_right"
			label="Sub Title Right"
			placeholder="Enter your Hero title content here."
			themeBase={'One'}
			value={pageData?.content?.hero?.sub_title_right}
		/>
	</div>
</fieldset>
