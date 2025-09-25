<script lang="ts">
	import { page } from '$app/state';
	import blank from '../../[[lang]]/(public)/(home)/utils/blank';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import QuillInput from '$lib/userInputs/quillInput/QuillInput.svelte';
	import SelectInput from '$lib/userInputs/select/SelectInput.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';
	import FormButton from '$lib/userInputs/button/FormButton.svelte';
	import { languageOptions, colorOptions } from '$lib/config/selectInputOptionArrays';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import { onDestroy } from 'svelte';
	import { setTheme } from '$lib/config/setTheme';
	import { enhance } from '$app/forms';

	const action = $state('?/set-page-content');
	const label = $state('Update Homepage Content');
	const processingLabel = $state('Processing...');
	const failLabel = $state('Something went wrong. Please try again.');
	const successLabel = $state('Homepage Successfully Updated.');
	const pageId = $state('home');
	const pageRoute = $state('/');
	const theme = $state(setTheme('One', 'form'));

	let form: HTMLFormElement | undefined = $state();
	let processing = $state(page?.form?.processing || false);
	let fail = $state(page?.form?.fail || false);
	let success = $state(page?.form?.success || false);
	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.page, blank);
	});
	$effect(() => updateContent());
	onDestroy(() => editor?.close());

	function startEditor() {
		const url = page.url.href.replace('/admin', '');
		window.open(`${url}?edit=true`, '_blank');
		editor = new BroadcastChannel('edit-home');
		editor.onmessage = (e: MessageEvent) => {
			if (e.data.type == 'ready') updateContent();
		};
	}

	function updateContent() {
		editor?.postMessage({ type: 'update', payload: { message: JSON.stringify(pageData) } });
	}

	async function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		processing = true;
		form?.submit();
	}

	function oncancel(e: MouseEvent) {
		e.preventDefault();
		reset = !reset;
	}
</script>

<section style="--_background: var({theme.one}); --_text: var({theme.two})">
	<MainButton label="Start Editor View" onclick={startEditor} />
	{#if !pageData}
		<p>Loading...</p>
	{:else}
		<form bind:this={form} method="POST" {action} {onsubmit} use:enhance>
			<!-- General Page Content. -->
			<fieldset>
				<legend>General Page Items</legend>
				<input type="hidden" name="name" value={pageId} />
				<input type="hidden" name="type" value={'page'} />
				<input type="hidden" name="route" value={pageRoute} />

				<div class="input">
					<SelectInput
						name="language"
						label="Language: "
						placeholder="Enter the language used in this entry."
						required={true}
						multiple={false}
						items={languageOptions}
						themeBase={'One'}
						bind:value={pageData.language}
					/>
				</div>
			</fieldset>

			<!-- Hero Section Inputs. -->
			<fieldset>
				<legend>Hero Content</legend>
				<div class="input">
					<General
						name="hero_background_image_url"
						label="Background Image URL"
						placeholder="Enter the URL for the background Image."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.hero.background_image_url}
					/>
				</div>

				<div class="input">
					<General
						name="hero_icon_content"
						label="Hero Content"
						placeholder="Enter your Hero title content here."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.hero.hero_icon_content}
					/>
				</div>
				<div class="input">
					<General
						name="hero_title_content"
						label="Hero Main Title"
						placeholder="Enter your Hero title content here."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.hero.hero_title_content}
					/>
				</div>
				<div class="editor">
					<QuillInput
						name="hero_sub_title_left"
						label="Sub Title Left"
						placeholder="Enter your Hero title content here."
						themeBase={'One'}
						bind:value={pageData.content.hero.sub_title_left}
					/>
				</div>
				<div class="editor">
					<QuillInput
						name="hero_sub_title_right"
						label="Sub Title Right"
						placeholder="Enter your Hero title content here."
						themeBase={'One'}
						bind:value={pageData.content.hero.sub_title_right}
					/>
				</div>
			</fieldset>

			<!-- Current Sermon Inputs. -->
			<fieldset>
				<legend>Current Sermon Content</legend>
				<div class="input">
					<General
						name="large_image_component_height"
						label="Select the component height"
						placeholder="Enter the portion of the screen the component should take up when in view"
						type={'number'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.large_image.component_height}
					/>
				</div>
				<div class="input">
					<General
						name="large_image_main_image_href"
						label="Main Image Link reference"
						placeholder="Enter the destination url for the image link."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.large_image.main_image.href}
					/>
				</div>
				<div class="editor">
					<General
						name="large_image_main_image_url"
						label="Main Image URL"
						placeholder="Enter the URL for the sermon image."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.large_image.main_image.url}
					/>
				</div>
				<div class="editor">
					<General
						name="large_image_main_image_alt"
						label="Main Image Title"
						placeholder="Enter the title that will appear below the image."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.large_image.main_image.alt}
					/>
				</div>
			</fieldset>

			<!-- Dual Content Inputs. -->
			<fieldset>
				<legend>Dual Content</legend>
				<div class="editor">
					<General
						name="dual_content_component_height"
						label="Component Height"
						placeholder="Enter the percentage of screen the component should consume when fully in view."
						type={'number'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.dual_content.component_height}
					/>
				</div>
				<div class="editor">
					<SelectInput
						name="dual_content_background_color"
						label="Select the Background Color"
						multiple={false}
						themeBase={'One'}
						required={true}
						placeholder="Select a Background Color for the section."
						bind:value={pageData.content.dual_content.background_color}
						items={colorOptions}
					/>
				</div>
				<div class="editor">
					<QuillInput
						name="dual_content_wide_content"
						label="Wide Line Spacing Content"
						placeholder="Enter the content you want in this component."
						themeBase={'One'}
						bind:value={pageData.content.dual_content.wide_content}
					/>
				</div>

				<div class="editor">
					<QuillInput
						name="dual_content_narrow_content"
						label="Narrow Line Spacing Content"
						placeholder="Enter the content you want in this component."
						themeBase={'One'}
						bind:value={pageData.content.dual_content.narrow_content}
					/>
				</div>
				<div class="input">
					<General
						name="dual_content_background_image_url"
						label="Background Image URL"
						placeholder="provide the URL to the component background image."
						type={'text'}
						required={true}
						themeBase={'One'}
						bind:value={pageData.content.dual_content.background_image_url}
					/>
				</div>
			</fieldset>

			<!-- JD About Inputs. -->
			<fieldset>
				<legend>JD About Content</legend>
				<fieldset>
					<legend>Background Gradient Color Selection</legend>
					<div class="input">
						<SelectInput
							name="tri_image_background_upper_color"
							label="Background Upper Color"
							placeholder="Select the upper background gradient color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorOptions}
							bind:value={pageData.content.tri_image.background_upper_color}
						/>
					</div>

					<div class="input">
						<SelectInput
							name="tri_image_background_lower_color"
							label="Background Lower Color"
							placeholder="Select the lower background gradient color."
							required={true}
							themeBase={'One'}
							multiple={false}
							items={colorOptions}
							bind:value={pageData.content.tri_image.background_lower_color}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Primary Image Content </legend>
					<div class="input">
						<General
							name="tri_image_primary_link_href"
							label="Primary Link Href"
							placeholder="Enter URL for primary image link."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.primary_content.link.href}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_primary_link_label"
							label="Primary Link Label"
							placeholder="Enter label for primary link."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.primary_content.link.label}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_primary_link_alt"
							label="Primary Link Alt Text"
							placeholder="Enter screen reader text for primary link."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.primary_content.link.alt}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_primary_image_src"
							label="Primary Image URL"
							placeholder="Enter the URL for the primary image."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.primary_content.image.src}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Upper Aside Image</legend>
					<div class="input">
						<General
							name="tri_image_aside_upper_image_url"
							label="Image URL"
							placeholder="Enter the URL for the upper image."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[0].image.src}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_aside_upper_link_href"
							label="Upper Content Block Href"
							placeholder="Enter the link URL for the upper content block."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[0].link.href}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_aside_upper_link_label"
							label="Upper Content Block Label"
							placeholder="Enter the link URL for the upper content block."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[0].link.href}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_aside_upper_link_alt"
							label="Upper Content Block Screen Reader Text"
							placeholder="Enter the text that will be read by the screen reader when hovering over the link."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[0].link.href}
						/>
					</div>
					<div class="editor">
						<QuillInput
							name="tri_image_aside_upper_content"
							label="Upper Content Box visible content"
							placeholder="Enter the content you want to show in the upper content box."
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[0].content}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Lower Aside Image</legend>
					<div class="input">
						<General
							name="tri_image_aside_lower_image_url"
							label="Image URL"
							placeholder="Enter the URL for the lower image."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[1].image.src}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_aside_lower_link_href"
							label="Lower Content Block Href"
							placeholder="Enter the link URL for the lower content block."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[1].link.href}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_aside_lower_link_label"
							label="Lower Content Block Label"
							placeholder="Enter the link URL for the lower content block."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[1].link.href}
						/>
					</div>
					<div class="input">
						<General
							name="tri_image_aside_lower_link_alt"
							label="Lower Content Block Screen Reader Text"
							placeholder="Enter the text that will be read by the screen reader when hovering over the link."
							type={'text'}
							required={true}
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[1].link.href}
						/>
					</div>
					<div class="editor">
						<QuillInput
							name="tri_image_aside_lower_content"
							label="Lower Content Box visible content"
							placeholder="Enter the content you want to show in the lower content box."
							themeBase={'One'}
							bind:value={pageData.content.tri_image.aside_content[1].content}
						/>
					</div>
				</fieldset>
			</fieldset>

			<Submit
				{label}
				{processingLabel}
				{processing}
				{failLabel}
				{fail}
				{successLabel}
				{success}
				themeBase={'One'}
			/>
			<FormButton label={'Cancel Changes'} themeBase={'One'} onclick={oncancel} />
		</form>
	{/if}
</section>

<style>
	section {
		padding-block: 10vh;
		padding-inline: 5vw;
		min-height: 100vh;
		background: var(--_background);
	}

	a {
		color: var(--_text);
	}

	form :global(> *) {
		margin-block: 2em;
	}

	fieldset {
		padding: 2em;
		background: color-mix(in lab, var(--_background), black 30%);
	}

	legend {
		color: var(--_text);
		padding: 5px;
	}
</style>
