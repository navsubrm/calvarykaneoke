<script>
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import SocialFollow from '$lib/components/SocialFollow/Index.svelte';
	let { pageData = $bindable() } = $props();
</script>

<div class="image-content-flex">
	<img
		src={pageData?.content?.about_image?.image?.src}
		alt={pageData?.content?.about_image?.image?.alt}
	/>
	<div>
		<h2>{pageData?.content?.about_image?.title}</h2>
		<div class="content">
			<GeneralContentBlock data={pageData?.content?.about_image?.content} />
		</div>
		<SocialFollow
			data={{
				title: 'FOLLOW',
				padding_top: 0.5,
				icon: {
					size: 25,
					brightness: 1,
					grey_scale: 0
				}
			}}
		/>
	</div>
</div>

<style>
	.image-content-flex {
		display: block;
	}

	.image-content-flex > * {
		margin-block: 20px;
	}

	img {
		width: 100%;
		max-width: 550px;
		aspect-ratio: auto;
		height: auto;
		margin-inline: auto;
	}

	.content :global(:where(p)) {
		margin-block: 20px;
		line-height: 1.5;
	}

	@media (min-width: 800px) {
		img {
			float: left;
			margin-right: 20px;
		}
	}

	@media (min-width: 1200px) {
		.image-content-flex {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: stretch;
			gap: 2em;
		}
	}
</style>
