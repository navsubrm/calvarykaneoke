<script lang="ts">
	import type { Snippet } from 'svelte';

	type color = { [key: string]: { value: string } | string };

	let {
		Children,
		data = $bindable()
	}: { Children: Snippet; data: { lower: color; upper: color; base: color } } = $props();
</script>

<section
	style="--_gradient-upper: {data?.upper?.value || data?.upper}; --_gradient-lower: {data?.lower
		?.value || data?.lower}; --_background-base: {data?.base?.value || data?.base};"
>
	{@render Children?.()}
</section>

<style>
	section {
		position: relative;
		--_footer-padding: 2.5em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--_footer-padding);
		padding-top: calc(var(--_footer-padding) + 10vh);
		height: var(--_component-height, 90vh);
		min-height: fit-content;
		background:
			linear-gradient(172deg, var(--_gradient-upper) 42%, var(--_gradient-lower)),
			var(--_background-base);
	}

	@media (min-width: 600px) {
		section {
			--_footer-padding: 4em;
			padding: var(--_footer-padding);
			padding-top: calc(3em * 2);
		}
	}
</style>
