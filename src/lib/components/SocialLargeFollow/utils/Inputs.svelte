<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let { pageData = $bindable() } = $props();

	let linkCount = $state(pageData?.content?.social_follow_large?.social_links?.length || 1);

	function addLink(e: MouseEvent) {
		e.preventDefault();
		pageData.content.social_follow_large.social_links = [
			...pageData?.content?.social_follow_large.social_links,
			{ title: '', src: '' }
		];
		linkCount = pageData.content.social_follow_large.social_links.length;
	}

	function deleteLink(e: MouseEvent, i: number) {
		e.preventDefault();
		pageData.content.social_follow_large.social_links = [
			...pageData.content.social_follow_large.social_links.filter(
				(_: unknown, index: number) => i !== index
			)
		];
		linkCount = pageData.content.social_follow_large.social_links.length;
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
			bind:value={pageData.content.social_follow_large.main.size}
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
			bind:value={pageData.content.social_follow_large.main.brightness}
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
			bind:value={pageData.content.social_follow_large.main.grey_scale}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Link List</legend>

	<MainButton label="Add New Link" onclick={addLink} />
	<input type="hidden" name="link_count" bind:value={linkCount} />

	{#each { length: linkCount }, i}
		<fieldset>
			<legend>Social Link {i + 1}</legend>
			<div>
				<div class="editor">
					<General
						name="social_follow_large_social_links_label_{i}"
						label="Link Title"
						placeholder="Enter the title."
						type={'text'}
						required={true}
						themeBase={'One'}
						value={pageData?.content?.social_follow_large?.social_links[i]?.label}
					/>
				</div>
				<div class="editor">
					<General
						name="social_follow_large_social_links_href_{i}"
						label="Link HREF"
						placeholder="Enter the HREF."
						type={'text'}
						required={true}
						themeBase={'One'}
						value={pageData?.content?.social_follow_large?.social_links[i]?.href}
					/>
				</div>
				<div class="editor">
					<General
						name="social_follow_large_social_links_alt_{i}"
						label="Alt Text for Screen Readers"
						placeholder="Enter alt text."
						type={'text'}
						required={true}
						themeBase={'One'}
						value={pageData?.content?.social_follow_large?.social_links[i]?.alt}
					/>
				</div>
				<div class="editor">
					<General
						name="social_follow_large_social_links_imgUrl_{i}"
						label="Image Link"
						placeholder="Enter the url for the image."
						type={'text'}
						required={true}
						themeBase={'One'}
						value={pageData?.content?.social_follow_large?.social_links[i]?.imgUrl}
					/>
				</div>
			</div>
			<MainButton label="Delete Link" onclick={(e) => deleteLink(e, i)} />
		</fieldset>
	{/each}
</fieldset>
