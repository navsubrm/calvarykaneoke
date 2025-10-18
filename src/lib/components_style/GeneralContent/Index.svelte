<script lang="ts">
	import type { Snippet } from 'svelte';

	let { Children, contentWidth = 1280 }: { Children: Snippet; contentWidth?: Number } = $props();
</script>

<div class="content-style-container" style="--_max-width: {contentWidth}px">
	{@render Children?.()}
</div>

<style>
	.content-style-container {
		width: 100%;
		min-height: fit-content;
		max-width: var(--_max-width, 1180px);
	}

	@media (min-width: 600px) {
		.content-style-container {
			width: 90%;
		}
	}
</style>
