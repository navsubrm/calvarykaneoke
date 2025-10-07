<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let { pageData = $bindable() } = $props();

	let streamCount = $state(pageData?.content?.social_follow_large.social_links?.length || 1);

	function addStream(e: MouseEvent) {
		e.preventDefault();
		pageData.content.social_follow_large.social_links = [
			...pageData?.content?.social_follow_large.social_links,
			{ title: '', src: '' }
		];
		streamCount = pageData.content.social_follow_large.social_links.length;
	}

	function deleteStream(e: MouseEvent, i: number) {
		e.preventDefault();
		pageData.content.social_follow_large.social_links = [
			...pageData.content.social_follow_large.social_links.filter(
				(_: unknown, index: number) => i !== index
			)
		];
		streamCount = pageData.content.social_follow_large.social_links.length;
	}
</script>

<fieldset>
	<legend>Social Follow Icon Settings</legend>

	<div class="editor">
		<General
			name="social_follow_large_main_size"
			label="Icon Size (in px)"
			placeholder="Enter a pixel size value for the icons."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.social_follow.icon.size}
		/>
	</div>

	<div class="editor">
		<General
			name="social_follow_large_main_brightness"
			label="Icon Brightness"
			placeholder="Enter a brightness value for the icons.  Enter 1 as default."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.social_follow.icon.brightness}
		/>
	</div>

	<div class="editor">
		<General
			name="social_follow_large_main_grey_scale"
			label="Icon Grey Scale"
			placeholder="Enter a grey Scale value for the icons.  Enter 0 as default."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.social_follow.icon.grey_scale}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Link List</legend>

	<MainButton label="Add New Link" onclick={addStream} />
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
			<MainButton label="Delete Link" onclick={(e) => deleteStream(e, i)} />
		</fieldset>
	{/each}
</fieldset>
