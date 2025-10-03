<script lang="ts">
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let { pageData = $bindable() } = $props();

	let index = $state(0);
	let streamPlayer: HTMLIFrameElement | undefined = $state();

	function checkAlternateSources() {
		if (!streamPlayer) return;
		console.log(index, pageData?.content?.streams.length);
		if (index < pageData?.content?.streams.length - 1) {
			index += 1;
		} else {
			index = 0;
		}
	}
</script>

<div class="vid-container">
	<div class="video">
		{#key index}
			<iframe
				bind:this={streamPlayer}
				title={pageData?.content?.streams[index].title}
				src={pageData?.content?.streams[index].src}
				style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
				allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
				allowfullscreen
			></iframe>
		{/key}
	</div>
</div>

<div class="title-block">
	<h3>JD Farag Live Stream Schedule</h3>
	<MainButton
		onclick={checkAlternateSources}
		label={`Watch ${
			pageData?.content?.streams[index < pageData?.content?.streams.length - 1 ? index + 1 : 0]
				.title
		} Livestream`}
	/>
</div>

<style>
	.vid-container {
		position: relative;
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.video {
		padding-top: 1.5%;
		padding-left: 10%;
		padding-right: 10%;
	}

	.title-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1em;
		align-items: center;
		width: 100%;
		margin-top: 2em;
		font-family:
			Tenor Sans,
			sans-serif;
	}

	@media (min-width: 1000px) {
		.title-block {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
