<script>
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	let { pageData = $bindable() } = $props();
</script>

<div class="image-content-flex">
	<img
		src={pageData?.content?.about_church?.image?.src}
		alt={pageData?.content?.about_church?.image?.alt}
	/>
	<div class="content">
		<h3>{pageData?.content?.about_church?.title}</h3>
		<GeneralContentBlock data={pageData?.content?.about_church?.content} />
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
		display: block;
		width: 100%;
		max-width: 250px;
		aspect-ratio: auto;
		height: auto;
		margin-inline: auto;
	}

	.image-content-flex div :global(> *) {
		margin-bottom: 20px;
	}

	.content :global(p) {
		margin-block: 20px;
		line-height: 1.5;
	}

	@media (min-width: 800px) {
		.image-content-flex img {
			float: left;
			margin-right: 20px;
		}
	}

	@media (min-width: 1200px) {
		.image-content-flex img {
			float: unset;
		}
		.image-content-flex {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: flex-start;
			gap: 2em;
		}
	}
</style>
