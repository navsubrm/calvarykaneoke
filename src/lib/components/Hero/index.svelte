<script lang="ts">
	import Editor from './utils/Editor.svelte';
	import testData from './utils/testData';
	import ChevronAnimation from './utils/ChevronAnimation.svelte';

	let pageData = $state(testData);
</script>

<section style="--_background-img: url({pageData.backgroundImage});">
	<Editor bind:pageData />
	<div class="main-content">
		{#if pageData?.heroIcon}
			<div class="title-header-icon">
				<h3>{pageData?.heroIcon}</h3>
			</div>
		{/if}

		{#if pageData?.heroTitle}
			<div class="main-title">
				<h1>{pageData?.heroTitle}</h1>
			</div>
		{/if}

		{#if pageData?.subTitleLeft && pageData?.subTitleRight}
			<div class="sub-title">
				<div class="sub-title-a">
					{@html JSON.parse(pageData?.subTitleLeft)?.html}
				</div>
				<div class="sub-title-b">
					{@html JSON.parse(pageData?.subTitleRight)?.html}
				</div>
			</div>
		{/if}
	</div>
	<ChevronAnimation />
</section>

<style>
	section,
	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
	}

	section {
		position: relative;
		min-height: 100vh;
		padding: 1em;
		background-image:
			linear-gradient(to bottom, #0000 25%, #24211cba 50%, #24211c), var(--_background-img);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title-header-icon {
		padding-inline: 1.5em;
		padding-block: 0.75em;
		color: var(--white);
		background: linear-gradient(
			145deg,
			color-mix(in lab, var(--deep-purple), transparent 15%),
			color-mix(in lab, var(--burlywood), transparent 35%)
		);
		max-width: 50ch;
		text-wrap: wrap;
	}

	.main-title {
		text-align: center;
		color: var(--white);
	}

	.sub-title {
		display: flex;
		flex-direction: column;
		font-size: 1em;
		color: var(--white);
		text-align: center;
	}

	.sub-title :global(:where(a, a:visited)) {
		flex-wrap: wrap;
		color: var(--white);
	}

	.sub-title-a,
	.sub-title-b {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		padding-inline: 1.5em;
		padding-block: 1em;
	}

	.sub-title-a {
		border-bottom: solid 1px var(--burlywood);
	}

	section :global(a:hover) {
		color: var(--burlywood);
	}

	@media (min-width: 800px) {
		section {
			background-image: linear-gradient(#0000 20%, #24211cba 82%, #24211c), var(--_background-img);
		}

		.main-content {
			z-index: 0;
		}

		.sub-title {
			flex-direction: row;
		}

		.sub-title-a,
		.sub-title-b {
			padding-block: 0.5em;
		}

		.sub-title-a {
			border-bottom: none;
			border-right: solid 1px var(--burlywood);
		}
	}
</style>
