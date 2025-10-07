<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Chevron from '$lib/icons/chevron/Chevron.svelte';
	import SubMenu from '$lib/components/Header/utils/SubMenu.svelte';

	let { menu, narrow = false } = $props();

	let container: HTMLElement = $state() as HTMLElement;
	let active = $state(false);
	let subNav: HTMLElement = $state() as HTMLElement;
	let left: number = $state(-20);

	function handleMenuOpen() {
		active = !active;
	}

	function handleCloseMenu(e: MouseEvent) {
		if (!active) return;
		if (!container.contains(e.target as Node)) active = false;
	}

	onNavigate(() => {
		active = false;
	});
</script>

<svelte:window onclick={handleCloseMenu} />

<li bind:this={container} class="hoverable sub-menu-container" style="--_left: {left}px;">
	<button class="header-menu" onclick={handleMenuOpen}>
		{menu.label}
		<Chevron bind:active />
	</button>
	<nav>
		<ul class="sub-menu" class:active bind:this={subNav} class:narrow>
			{#each menu.subMenu as link}
				{#if link.type == 'link'}
					<li class="hoverable">
						<a href={link.href} title={link.alt} class:admin={link.href.includes('/admin/')}
							>{link.label}</a
						>
					</li>
				{:else if link.type == 'menu'}
					<SubMenu menu={link} narrow={true} />
				{/if}
			{/each}
		</ul>
	</nav>
</li>

<style>
	.sub-menu-container {
		position: relative;
	}
	button {
		--_fill: var(--white);
		--_height: 15px;
		background: none;
		border: none;
	}

	.sub-menu {
		display: block;
		position: absolute;
		top: 44px;
		list-style: none;
		left: var(--_left);
		padding-block: 1em;
		padding-inline: 1.5em;
		border-radius: 0 0 0.2em 0.2em;
		width: max-content;
		max-width: 250px;
		height: 0;
		background-color: var(--midnight-royal);
		transform: translateY(0vh);
		opacity: 0;
		overflow: hidden;
		transition:
			scale 0.25s linear,
			transform 0.25s linear,
			opacity 0.25s 0.15s linear,
			height 0.45s linear;
		transition-behavior: allow-discrete;
		z-index: 100;
	}

	@media (max-width: 1000px) {
		.sub-menu {
			position: relative;
			top: unset;
			background-color: transparent;
			height: 0px;
			padding-block: 0;
			transform: translateY(0);
			transition:
				height 0.25s linear allow-discrete,
				scale 0.25s 0.1s linear,
				transform 0.25s 0.15s linear,
				opacity 0.25s 0.25s linear,
				padding 0 0.5s linear;
			transition-behavior: allow-discrete;
		}
	}

	.narrow {
		position: relative;
		top: unset;
		background-color: transparent;
		height: 0px;
		padding-block: 0;
		transform: translateY(0);
		transition:
			height 0.25s linear allow-discrete,
			scale 0.25s 0.1s linear,
			transform 0.25s 0.15s linear,
			opacity 0.25s 0.25s linear,
			padding 0 0.5s linear;
		transition-behavior: allow-discrete;
	}

	li {
		margin-block: 20px;
	}

	.active {
		min-height: fit-content;
		height: 150px;
		max-height: max-content;
		opacity: 1;
		transform: translateY(0);

		@starting-style {
			height: 0px;
			opacity: 0;
			transform: translateY(-3vh);
		}
	}

	.active :global(> *) {
		opacity: 1;
	}

	.header-menu {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	button:hover {
		--_fill: var(--burlywood);
		color: var(--burlywood);
	}

	li:hover :global(> *) {
		color: var(--burlywood);
	}

	.admin {
		color: var(--indian-red) !important;
	}
</style>
