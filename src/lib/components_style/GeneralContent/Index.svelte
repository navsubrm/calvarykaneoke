<script lang="ts">
	import type { Snippet } from 'svelte';

	let { Children }: { Children: Snippet } = $props();
</script>

<div>
	{@render Children?.()}
</div>

<style>
	div {
		width: 100%;
	}

	@media (min-width: 600px) {
		div {
			width: 90%;
			max-width: 1280px;
		}
	}
</style>
