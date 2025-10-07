<script lang="ts">
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();

	let streamCount = $state(pageData?.content?.streams?.length || 1);

	function addStream(e: MouseEvent) {
		e.preventDefault();
		pageData.content.streams = [...pageData?.content?.streams, { title: '', src: '' }];
		streamCount = pageData.content.streams.length;
	}

	function deleteStream(e: MouseEvent, i: number) {
		e.preventDefault();
		pageData.content.streams = [
			...pageData.content.streams.filter((_: unknown, index: number) => i !== index)
		];
		streamCount = pageData.content.streams.length;
	}
</script>

<fieldset>
	<legend>Stream Information</legend>
	<MainButton label="Add New Stream" onclick={addStream} />
	<input type="hidden" name="stream_count" bind:value={streamCount} />

	{#each { length: streamCount }, i}
		<fieldset>
			<legend>Stream {i + 1}</legend>
			<div>
				<div class="editor">
					<General
						name="streams_title_{i}"
						label="Stream Title"
						placeholder="Enter the title of this stream."
						type={'text'}
						required={true}
						themeBase={'One'}
						value={pageData?.content?.streams[i]?.title}
					/>
				</div>
				<div class="editor">
					<General
						name="streams_src_{i}"
						label="Stream Source Url"
						placeholder="Enter the url for the stream."
						type={'text'}
						required={true}
						themeBase={'One'}
						value={pageData?.content?.streams[i]?.src}
					/>
				</div>
			</div>
			<MainButton label="Delete Stream" onclick={(e) => deleteStream(e, i)} />
		</fieldset>
	{/each}
</fieldset>
