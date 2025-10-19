<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>General Content</legend>
	<div class="editor">
		<General
			name="about_main_component_height"
			label="Component Height"
			placeholder="Enter the percentage of screen the component should consume when fully in view."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.about_main.component_height}
		/>
	</div>

	<div class="editor">
		<General
			name="about_main_src"
			label="Background Image URL"
			placeholder="Enter the url string for the background image."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.about_main.src}
		/>
	</div>

	<div class="editor">
		<General
			name="about_main_content"
			label="Text Content"
			placeholder="Enter the text to appear at that bottom of the section."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.about_main.content}
		/>
	</div>
</fieldset>
