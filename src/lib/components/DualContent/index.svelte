<script>
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';

	let { data } = $props();
</script>

<section
	style="
        --_component-height: {data?.component_height}vh; 
        --_background-color-upper: {data?.background_color_upper?.value ||
		data?.background_color_upper ||
		'white'};
		--_background-color-lower: {data?.background_color_upper?.value ||
		data?.background_color_lower ||
		'--gold'};
        --_background-image: url({data?.background_image_url});"
>
	<div class="upper-content-area">
		<GeneralContentBlock data={data?.wide_content} classes={'upper-content'} />
	</div>
	<div class="lower-content-area">
		<GeneralContentBlock data={data?.narrow_content} classes={'lower-content'} />
	</div>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: var(--_component-height);
		min-height: 15vh;
		background:
			linear-gradient(
				to bottom,
				var(--_background-color-upper) 5%,
				color-mix(in lab, var(--deep-purple), transparent 25%) 35%,
				color-mix(in lab, var(--deep-purple), transparent 65%) 45%,
				color-mix(in lab, var(--white), transparent 45%) 80%,
				var(--_background-color-lower) 100%
			),
			var(--_background-image);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		width: 100%;
	}

	section :global(:where(a, a:visited)) {
		color: inherit;
	}

	section :global(:where(a:hover, a:visited:hover)) {
		color: inherit;
		filter: brightness(1.3) grayscale(0.7);
	}

	section :global(.upper-content :where(a:hover, a:visited:hover)),
	section :global(.lower-content :where(a:hover, a:visited:hover)) {
		color: inherit;
		filter: brightness(1.3) grayscale(0.7);
	}

	.upper-content-area,
	.lower-content-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1 1 0;
	}

	.upper-content-area,
	.lower-content-area :global(.lower-content) {
		width: 75%;
		max-width: 1000px;
	}

	.lower-content-area {
		width: 100%;
	}

	@media (max-width: 991px) {
		.lower-content-area {
			background-position: right center;
		}

		.upper-content-area,
		.lower-content-area :global(.lower-content) {
			width: 88%;
		}
	}

	.upper-content-area :global(.upper-content),
	.lower-content-area :global(.lower-content) {
		padding-inline: 5%;
		color: var(--white);
		line-height: 2;
	}

	.upper-content-area :global(.upper-content) {
		text-align: center;
	}

	.upper-content-area :global(.upper-content > *) {
		margin-bottom: 30px;
	}
</style>
