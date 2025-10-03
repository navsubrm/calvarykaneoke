<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>Video Information</legend>
	<div class="editor">
		<General
			name="video_title"
			label="Video Title"
			placeholder="Enter the title of this video."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.video.title}
		/>
	</div>
	<div class="editor">
		<General
			name="video_src"
			label="Video Source Url"
			placeholder="Enter the url for the video."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.video.src}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Video Footer Information</legend>
	<div class="editor">
		<General
			name="video_footer_url"
			label="Video Footer Link"
			placeholder="Enter the url for the video."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.video.footer.url}
		/>
	</div>
	<div class="editor">
		<General
			name="video_footer_text"
			label="Video Footer Text"
			placeholder="Enter the url for the video."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.video.footer.text}
		/>
	</div>
</fieldset>
