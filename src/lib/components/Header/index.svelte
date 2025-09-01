<script lang="ts">
	import { page } from '$app/state';
	import SubMenu from './utils/SubMenu.svelte';
	import Hamburger from '$lib/icons/hamburger/Hamburger.svelte';
	import { onNavigate } from '$app/navigation';

	const links = $state(page?.data?.links);
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

<header>
	<h4>JD FARAG</h4>

	<button onclick={handleShowMenu} class="narrow btn"><Hamburger bind:active /> </button>

	{@render wideMenu()}
</header>
{@render mobileMenu()}

{#snippet wideMenu()}
	<nav class="wide">
		<ul>
			{#each links as link}
				{#if link.location == 'header' && link.type == 'link'}
					<li class="hoverable">
						<a href={link.href} title={link.alt}>{link.label}</a>
					</li>
				{:else if link.location == 'header' && link.type == 'menu'}
					<SubMenu menu={link} />
				{/if}
			{/each}
		</ul>
	</nav>
{/snippet}

{#snippet mobileMenu()}
	<nav class:active bind:this={container} class="narrow">
		<button onclick={handleShowMenu} class="btn btn-close"><Hamburger bind:active /> </button>
		<ul>
			{#each links as link}
				{#if link.location == 'header' && link.type == 'link'}
					<li class="hoverable">
						<a href={link.href} title={link.alt}>{link.label}</a>
					</li>
				{:else if link.location == 'header' && link.type == 'menu'}
					<SubMenu menu={link} />
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
		padding-inline: 1em;
		height: 70px;
		z-index: 100;
	}

	h4 {
		color: var(--white);
		letter-spacing: 3px;
		font-weight: bold;
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
