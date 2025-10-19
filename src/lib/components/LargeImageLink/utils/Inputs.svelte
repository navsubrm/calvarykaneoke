<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>General</legend>
	<div class="input">
		<General
			name="large_image_component_height"
			label="Select the component height"
			placeholder="Enter the portion of the screen the component should take up when in view"
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.large_image.component_height}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Image Items</legend>

	<div class="input">
		<General
			name="large_image_main_image_href"
			label="Main Image Link reference"
			placeholder="Enter the destination url for the image link."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.large_image.main_image.href}
		/>
	</div>
	<div class="editor">
		<General
			name="large_image_main_image_url"
			label="Main Image URL"
			placeholder="Enter the URL for the sermon image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.large_image.main_image.url}
		/>
	</div>
</fieldset>
<fieldset>
	<legend>Title Below Image</legend>

	<div class="editor">
		<General
			name="large_image_main_image_alt"
			label="Main Image Title"
			placeholder="Enter the title that will appear below the image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.large_image.main_image.alt}
		/>
	</div>
</fieldset>
