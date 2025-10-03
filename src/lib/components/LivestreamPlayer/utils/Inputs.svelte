<script lang="ts">
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();

	let streamArray = $state(pageData?.content?.streams);

	function addStream(e: MouseEvent) {
		e.preventDefault();
		pageData?.content?.streams.push({ title: '', src: '' });
	}

	function deleteStream(e: MouseEvent, i: number) {
		e.preventDefault();
		pageData?.content?.streams.splice(i, 1);
	}

	$inspect('Streams Data: ', pageData.content);
</script>

<fieldset>
	<legend>Stream Information</legend>
	<MainButton label="Add New Stream" onclick={addStream} />
	<input type="hidden" name="streams" value={JSON.stringify(streamArray)} />

	{#each { length: pageData.content.streams.length }, i}
		<fieldset>
			<legend>Steam {i + 1}</legend>
			<div>
				<div class="editor">
					<General
						name="streams_title_{i}"
						label="Stream Title"
						placeholder="Enter the title of this stream."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.streams[i].title}
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
						bind:value={pageData.content.streams[i].src}
					/>
				</div>
			</div>
			<MainButton label="Delete Stream" onclick={(e) => deleteStream(e, i)} />
		</fieldset>
	{/each}
</fieldset>
