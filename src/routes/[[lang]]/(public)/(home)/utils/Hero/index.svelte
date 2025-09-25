<script lang="ts">
	import ChevronAnimation from './utils/ChevronAnimation.svelte';

	let { data } = $props();
</script>

<section style="--_background-img: url({data?.background_image_url});">
	<div class="main-content">
		{#if data?.hero_icon_content}
			<div class="title-header-icon">
				<h3>{data?.hero_icon_content}</h3>
			</div>
		{/if}

		{#if data?.hero_title_content}
			<div class="main-title">
				<h1>{data?.hero_title_content}</h1>
			</div>
		{/if}

		{#if data?.sub_title_left && data?.sub_title_right}
			<div class="sub-title">
				<div class="sub-title-a">
					{@html JSON.parse(data?.sub_title_left)?.html}
				</div>
				<div class="sub-title-b">
					{@html JSON.parse(data?.sub_title_right)?.html}
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
		flex-basis: 0;
		flex-grow: 1;
	}

	.sub-title-a,
	.sub-title-b {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		padding-inline: 1.5em;
		padding-block: 1em;
		width: 50%;
		flex-grow: 1;
		flex-shrink: 0;
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
			width: 100%;
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
