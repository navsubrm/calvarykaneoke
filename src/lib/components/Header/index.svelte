<script lang="ts">
	import { page } from '$app/state';
	import SubMenu from './utils/SubMenu.svelte';
	import Hamburger from '$lib/components/icons/hamburger/Hamburger.svelte';
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicLink } from '@prismicio/svelte';
	import { onNavigate } from '$app/navigation';

	type Props =
		| SliceComponentProps<Content.HeaderSlice>
		| { slice: { slice_type: 'header'; variation: 'default' } };

	const { slice }: Props = $props();

	const menus = $state(page?.data?.navigation?.data?.menus);
	let container: HTMLElement = $state() as HTMLElement;
	let active = $state(false);

	function handleShowMenu() {
		setTimeout(() => (active = !active), 200);
	}

	function handleCloseMenu(e: MouseEvent) {
		if (!active) return;
		if (!container.contains(e.target as Node) && active) active = false;
	}

	onNavigate(() => {
		active = false;
	});
</script>

<svelte:window onclick={handleCloseMenu} />

<header data-slice-type={slice?.slice_type} data-slice-variation={slice?.variation}>
	<h2>JD FARAG</h2>

	<button onclick={handleShowMenu} class="narrow btn"><Hamburger bind:active /> </button>

	{@render wideMenu()}
</header>
{@render mobileMenu()}

{#snippet wideMenu()}
	<nav class="wide">
		<ul>
			{#each menus as menu}
				{#if menu.menu_links.length == 0}
					<li>Empty Menu</li>
				{:else if menu.menu_links.length == 1}
					{#each menu.menu_links as link}
						<li class="hoverable">
							<PrismicLink field={link} />
						</li>
					{/each}
				{:else}
					<SubMenu {menu} />
				{/if}
			{/each}
		</ul>
	</nav>
{/snippet}

{#snippet mobileMenu()}
	<nav class:active bind:this={container} class="narrow">
		<button onclick={handleShowMenu} class="btn btn-close"><Hamburger bind:active /> </button>
		<ul>
			{#each menus as menu}
				{#if menu.menu_links.length == 0}
					<li>Empty Menu</li>
				{:else if menu.menu_links.length == 1}
					{#each menu.menu_links as link}
						<li class="hoverable">
							<PrismicLink field={link} />
						</li>
					{/each}
				{:else}
					<SubMenu {menu} />
				{/if}
			{/each}
		</ul>
	</nav>
{/snippet}

<style>
	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		background-color: var(--midnight-royal);
		padding-block: 1em;
		padding-inline: 0.5em;
		height: 70px;
		z-index: 100;
	}

	h2 {
		color: var(--white);
		letter-spacing: 3px;
	}

	nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 2em;
	}

	nav :global(button),
	nav :global(a) {
		text-decoration: none;
		color: white;
		font-family: 'Tenor Sans', sans-serif;
		text-transform: uppercase;
		font-size: 1em;
	}

	.hoverable:hover :global(:where(a)) {
		color: var(--burlywood);
	}

	.btn {
		display: none;
	}

	@media (min-width: 1000px) {
		.narrow {
			display: none;
		}
	}

	@media (max-width: 1000px) {
		.wide {
			display: none;
		}
		header {
			overflow-x: hidden;
			justify-content: space-between;
			z-index: 10;
		}
		nav {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			padding-top: 10vh;
			width: 100%;
			max-width: 400px;
			background-color: var(--darkpurple);
			transform: translateX(100%);
			transition: all 0.5s ease-in-out;
			z-index: 100;
		}

		nav ul {
			height: 100%;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 2em;
			gap: 2em;
		}

		.active {
			transform: translateX(0);
		}

		.btn {
			display: block;
			--_height: 50px;
			--_line-color: var(--white);
			--_line-color-hover: var(--burlywood);
			background: none;
			border: none;
		}

		.btn-close {
			position: absolute;
			top: 15px;
			right: 15px;
		}
	}
</style>
