<script lang="ts">
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import type { Props } from './utils/props.types';

	const { slice }: Props = $props();
</script>

<section class="flex" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="flex container">
		<a href={slice.primary?.large_image_link?.url} class="large-image">
			<p>{slice.primary.large_image_link?.text}</p>
			<PrismicImage field={slice.primary.large_image} />
		</a>
		<div class="flex content-block-container">
			{#each slice.primary.content_list as { content_image, content, content_link }}
				<div class="flex content-block">
					<a href={content_link?.url} class="content-block-img-a">
						<PrismicImage field={content_image} />
					</a>

					<div class="content-details">
						<PrismicRichText field={content} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1 1 0;
	}

	section {
		min-height: fit-content;
		padding-inline: 5%;
		padding-block: 5%;
		background-color: var(--darkness);
		background-image: linear-gradient(
			175deg,
			var(--khaki) 32%,
			#d2cbbbe6 68%,
			var(--deep-purple) 99%
		);
	}

	.container {
		gap: 40px;
		align-items: stretch;
		justify-content: stretch;
	}

	.large-image {
		position: relative;
		overflow: hidden;
	}

	.large-image p {
		position: absolute;
		left: 40%;
		bottom: 30px;
		color: var(--white);
		font-size: 1.5em;
		text-transform: uppercase;
		font-family: 'Tenor Sans', sans-serif;
		z-index: 1000;
	}

	.large-image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 0;
		transition: scale 0.25s linear;
	}

	.large-image:hover :global(img) {
		scale: 1.02;
	}

	.content-block-container {
		gap: 20px;
		align-items: stretch;
	}

	.content-block {
		padding: 10px;
		justify-content: flex-start;
		align-items: stretch;
		gap: 10px;
		background: var(--floral-white);
	}

	section :global(:where(a, a:visited)) {
		color: inherit;
	}

	.large-image :global(:where(a, a:visited)) {
		text-decoration: none;
	}

	.content-block :global(img) {
		width: 100%;
		height: auto;
		aspect-ratio: auto;
		object-fit: cover;
		object-position: 50% 0;
		transition: scale 0.25s linear;
	}

	.content-block :global(img:hover) {
		scale: 1.02;
	}

	.content-details {
		font-family: Arial, Helvetica, sans-serif;
	}

	.content-details :global(> *) {
		line-height: 1.2;
		margin-bottom: 10px;
	}

	@media (min-width: 500px) {
		.content-block-container {
			flex-direction: row;
		}
	}

	@media (min-width: 1000px) {
		section {
			padding-top: 3%;
			padding-inline: 3%;
			padding-bottom: 10%;
		}

		.container {
			flex-direction: row;
			/* justify-items: stretch; */
			gap: 40px;
			max-width: 1200px;
		}

		.large-image {
			flex: 1 1 0;
		}

		.content-block-container {
			flex-direction: column;
			align-items: stretch;
			width: 50%;
			gap: 10px;
		}

		.content-block-container :global(> *) {
			flex: 1 1 0;
		}

		.content-block-img-a {
			height: 100%;
			width: 100%;
			aspect-ratio: auto;
			max-width: 200px;
			overflow: hidden;
		}

		.content-block-img-a :global(img) {
			width: 100%;
			height: 100%;
			/* height: 100%;
			aspect-ratio: auto;
			max-width: 200px;
			overflow: hidden; */
		}

		.content-block {
			flex-direction: row;
		}

		.content-details {
			padding-left: 10px;
			padding-right: 20px;
		}
	}
</style>
