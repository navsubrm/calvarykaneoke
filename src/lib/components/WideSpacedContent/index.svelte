<script>
	import Editor from './utils/Editor.svelte';
	import testData from './utils/testData';

	let { pageData = $bindable(testData) } = $props();
</script>

<section
	style="
        --_component-height: {pageData?.componentHeight}vh; 
        --_background-color: {pageData?.backgroundColor?.value};
        --_background-image: url({pageData?.backgroundImageUrl});"
>
	<Editor bind:pageData />
	<div class="upper-content-area">
		<div class="upper-content">
			{@html JSON.parse(pageData?.wideContent)?.html}
		</div>
	</div>
	<div class="lower-content-area">
		<div class="lower-content">
			{@html JSON.parse(pageData?.narrowContent)?.html}
		</div>
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
		min-height: fit-content;
		background:
			linear-gradient(
				to bottom,
				var(--_background-color) 5%,
				color-mix(in lab, var(--deep-purple), transparent 25%) 35%,
				color-mix(in lab, var(--deep-purple), transparent 65%) 45%,
				color-mix(in lab, var(--white), transparent 45%)
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

	.upper-content :global(:where(a:hover, a:visited:hover)),
	.lower-content :global(:where(a:hover, a:visited:hover)) {
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
	.lower-content {
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
		.lower-content {
			width: 88%;
		}
	}

	.upper-content,
	.lower-content {
		padding-inline: 5%;
		color: var(--white);
		line-height: 2;
	}

	.upper-content {
		text-align: center;
	}

	.upper-content :global(> *) {
		margin-bottom: 30px;
	}
</style>
