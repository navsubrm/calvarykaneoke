<script lang="ts">
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let { pageData = $bindable() } = $props();

	let index = $state(0);
	let streamPlayer: HTMLIFrameElement | undefined = $state();
	let change = $state(false);

	function checkAlternateSources() {
		if (!streamPlayer) return;
		console.log(index, pageData?.content?.streams.length);
		if (index < pageData?.content?.streams.length - 1) {
			index += 1;
		} else {
			index = 0;
		}
	}

	function handleChange() {
		change = true;
		setTimeout(() => {
			change = false;
		}, 150);
	}

	$effect(() => {
		index;
		handleChange();
	});
</script>

<div class="vid-container">
	<div class="video">
		<iframe
			bind:this={streamPlayer}
			title={pageData?.content?.streams[index].title}
			src={pageData?.content?.streams[index].src}
			allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
			allowfullscreen
			class:change-out={change}
			class:change-in={!change}
		></iframe>
	</div>
</div>

<div class="title-block" class:change-button={change}>
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

	iframe {
		border: none;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transform: translateY(5px);
	}

	.change-out {
		opacity: 0;
		transition: all 0.15s ease-out;

		@starting-style {
			opacity: 1;
		}
	}

	.change-in {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 1s 0.5s ease-in,
			transform 0.5s 0.5s ease-in;

		@starting-style {
			opacity: 0;
		}
	}

	.change-button {
		pointer-events: none;
	}

	@media (min-width: 1000px) {
		.title-block {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
