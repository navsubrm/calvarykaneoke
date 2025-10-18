<script lang="ts">
	import type { Snippet } from 'svelte';

	let { Children }: { Children: Snippet } = $props();
</script>

<div class="content-style-container">
	{@render Children?.()}
</div>

<style>
	div,
	.content-style-container {
		width: 100%;
		min-height: fit-content;
	}

	@media (min-width: 600px) {
		div,
		.content-style-container {
			width: 90%;
			max-width: 1180px;
		}
	}
</style>
