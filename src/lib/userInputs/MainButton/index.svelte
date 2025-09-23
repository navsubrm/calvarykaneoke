<script lang="ts">
	import type { Props } from './utils/props.types';
	let { label, href, onclick }: Props = $props();
</script>

{#if onclick}
	<button class="button" {onclick}>{label}</button>
{:else if href}
	<a {href} target="_blank" class="button">{label}</a>
{/if}

<style>
	.button {
		display: flex;
		background: white;
		color: var(--gold);
		letter-spacing: 1px;
		text-transform: uppercase;
		vertical-align: middle;
		background-color: var(--floral-white);
		border: 1px solid var(--gold);
		justify-content: center;
		align-items: stretch;
		padding: 10px 13px 10px 15px;
		font-size: 12px;
		transition: all 0.25s linear;
		text-decoration: none;
		font-family: 'Open Sans', sans-serif;
	}

	.button:hover {
		background: var(--deep-purple);
		color: var(--floral-white);
		border: solid 0.25px var(--deep-purple);
	}

	@media (min-width: 750px) {
		.button {
			font-size: 14px;
		}
	}
</style>
