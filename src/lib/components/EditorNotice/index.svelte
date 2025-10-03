<script lang="ts">
	let { editor = $bindable() } = $props();
</script>

{#if editor}
	<div class="edit-mode-active">
		<p>Editor Mode Active</p>
	</div>
{/if}

<style>
	.edit-mode-active {
		position: fixed;
		top: 10vh;
		left: 20px;
		height: 40px;
		display: flex;
		justify-content: center;
		color: var(--floral-white);
		align-items: center;
		padding: 1.5em;
		border-radius: 0.5em;
		font-weight: bold;
		z-index: 1000;
		animation: fadeInOut 20s ease-in-out infinite;
	}

	@keyframes fadeInOut {
		0% {
			background: var(--indian-red);
		}
		15% {
			background: var(--deep-purple);
		}
		20% {
			background: var(--deep-purple);
		}
		80% {
			background: var(--deep-purple);
		}
		85% {
			background: var(--indian-red);
		}
		100% {
			background: var(--indian-red);
		}
	}
</style>
