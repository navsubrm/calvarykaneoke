<script lang="ts">
	import General from '$lib/userInputs/general/General.svelte';

	let { pageData = $bindable() } = $props();
</script>

<fieldset>
	<legend>Social Follow General</legend>
	<div class="input">
		<General
			name="social_follow_title"
			label="Title (Optional)"
			placeholder="Enter a header for the social follow icons if desired."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.social_follow.title}
		/>
	</div>

	<div class="input">
		<General
			name="social_follow_padding_top"
			label="Enter spacing value above social icons."
			placeholder="Enter the destination url for the image link."
			type={'text'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.social_follow.padding_top}
		/>
	</div>
</fieldset>

<fieldset>
	<legend>Social Follow Icon Settings</legend>

	<div class="editor">
		<General
			name="social_follow_icon_size"
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
			name="social_follow_icon_brightness"
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
			name="social_follow_icon_grey_scale"
			label="Icon Grey Scale"
			placeholder="Enter a grey Scale value for the icons.  Enter 0 as default."
			type={'number'}
			required={true}
			themeBase={'One'}
			bind:value={pageData.content.social_follow.icon.grey_scale}
		/>
	</div>
</fieldset>
