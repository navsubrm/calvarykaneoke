<script lang="ts">
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blankTriPictureContent from './utils/blankTriPictureContent';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.triPicture, blankTriPictureContent));

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.triPicture, blankTriPictureContent);
	});
</script>

<section
	class="flex"
	style="--_bg-upper-color: {pageData?.content?.background_upper_color.value}; 
		--_bg-lower-color: {pageData?.content?.background_lower_color.value}"
>
	<Editor bind:pageData bind:reset />
	<div class="flex container">
		{#if pageData?.content?.primary_content}
			<a
				href={pageData?.content?.primary_content?.link?.href}
				class="large-image"
				title={pageData?.content?.primary_content?.link?.alt}
			>
				<p>{pageData?.content?.primary_content?.link?.label}</p>
				<img
					src={pageData?.content?.primary_content?.image?.src}
					alt={pageData?.content?.primary_content?.image?.alt}
				/>
			</a>
		{/if}
		<div class="flex content-block-container">
			{#if pageData?.content.aside_content}
				{#each pageData?.content?.aside_content as { image, content, link }}
					<div class="flex content-block">
						<a href={link.href} class="content-block-img-a" title={link.alt}>
							<img src={image?.src} alt={link?.alt} />
						</a>

						<div class="content-details">
							{@html JSON.parse(content)?.html}
						</div>
					</div>
				{/each}
			{/if}
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
		position: relative;
		min-height: fit-content;
		padding-inline: 5%;
		padding-block: 5%;
		background-color: var(--darkness);
		background-image: linear-gradient(
			175deg,
			var(--_bg-upper-color) 32%,
			#d2cbbbe6 68%,
			var(--_bg-lower-color) 99%
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

	.content-details :global(:where(h1, h2, h3, h4, h5, h5)) {
		margin-top: 20px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: 17px;
	}

	.content-details :global(:where(:not(h1, h2, h3, h4, h5, h5))) {
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
	}

	.content-details :global(> *) {
		line-height: 1.4;
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
