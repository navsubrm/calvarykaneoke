<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();
</script>

<details>
	<summary>Meta Data</summary>
	<fieldset>
		<legend>Title</legend>
		<div class="input">
			<General
				name="meta_data_title"
				label="Page Title"
				placeholder="Enter the title that will be displayed in tab."
				type={'text'}
				required={true}
				themeBase={'One'}
				bind:value={pageData.meta_data.title}
			/>
		</div>
	</fieldset>
</details>
