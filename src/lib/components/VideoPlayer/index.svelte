<script>
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	let { pageData } = $props();
</script>

<div class="vid-container">
	<div class="video">
		<iframe
			title={pageData?.content?.video?.title}
			src={pageData?.content?.video?.src}
			style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
			allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-footer">
	<MainButton label={'SEND POSTCARD'} href={pageData?.content?.video?.footer?.url} />
	<p>{pageData?.content?.video?.footer?.text}</p>
</div>

<style>
	.vid-container {
		position: relative;
		aspect-ratio: 16 / 9;
		width: 100%;
		border-top: solid 0.5px var(--floral-white);
	}

	.vid-container,
	.video-footer {
		border-left: solid 0.5px var(--floral-white);
		border-right: solid 0.5px var(--floral-white);
	}

	.video-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 1em;
		background: var(--gold);
		color: var(--floral-white);
		border-bottom: solid 0.5px var(--floral-white);
	}

	.video-footer p {
		text-transform: uppercase;
	}

	.video {
		padding-top: 1.5%;
		padding-left: 10%;
		padding-right: 10%;
	}
</style>
