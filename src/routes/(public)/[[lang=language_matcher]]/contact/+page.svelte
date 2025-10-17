<script lang="ts">
	import { page } from '$app/state';
	import { applyAction, enhance } from '$app/forms';
	import { componentDataConverter } from '$lib/config/helperFunctions/componentDataConverter';
	import blank from '$lib/config/dataModels/Contact';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import EditorNotice from '$lib/components/EditorNotice/index.svelte';
	import GeneralContentBlock from '$lib/components/GeneralContentBlock/index.svelte';
	import SocialFollow from '$lib/components/SocialFollow/Index.svelte';
	import GradientSection from '$lib/components_style/GradientSection/Index.svelte';
	import GeneralContent from '$lib/components_style/GeneralContent/Index.svelte';
	import General from '$lib/userInputs/general/General.svelte';
	import TextArea from '$lib/userInputs/textArea/TextArea.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.page, blank));
	let editor: BroadcastChannel | undefined = $state();
	let processing = $state(false);
	let success = $state(page?.form?.success || false);
	let fail = $state(page?.form?.fail || false);

	//Check for edit mode, initiate, update URL to hide session id and start editor.
	onMount(() => {
		if (page?.data?.editor?.mode == 'edit') {
			page?.url.searchParams.delete('mode');
			page?.url.searchParams.delete('edit-id');
			goto(page?.url?.href, { replaceState: true });
			editor = new BroadcastChannel(`edit-${page?.data?.editor?.id}`);
			editor.postMessage({ type: 'ready' });
			editor.onmessage = (e: MessageEvent) => (pageData = JSON.parse(e.data.payload.message));
		}
	});

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.page, blank);
	});

	onDestroy(() => editor?.close());

	$inspect('Form Data: ', page?.form);
</script>

<svelte:head>
	<title>{pageData?.meta_data?.title}</title>
</svelte:head>

<EditorNotice bind:editor />
<GradientSection Children={contentStyling} bind:data={pageData.content.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} />
	{#snippet content()}
		<div class="container">
			<form
				action="?/contact"
				method="POST"
				use:enhance={() => {
					processing = true;
					return ({ result }) => {
						processing = false;
						success = result?.data?.success || false;
						fail = result?.data?.fail || false;
						applyAction(result);
					};
				}}
			>
				<h4>Contact Us</h4>
				<div class="input">
					<General
						name="contact_name"
						label="Name"
						placeholder="Enter your full name."
						type={'text'}
						required={true}
						themeBase={'Two'}
						messages={[
							{
								type: 'danger',
								active: page?.form?.nameMissing,
								msg: 'Name is required.',
								themeBase: 'Two'
							}
						]}
						value={page?.form?.name || null}
					/>
					<hr />
				</div>

				<div class="input">
					<General
						name="contact_email"
						label="Email Address"
						placeholder="Enter your email."
						type={'email'}
						required={true}
						themeBase={'Two'}
						messages={[
							{
								type: 'danger',
								active: page?.form?.emailMissing,
								msg: 'Email is required.',
								themeBase: 'Two'
							},
							{
								type: 'danger',
								active: page?.form?.invalidEmail,
								msg: 'The email you entered is invalid.',
								themeBase: 'Two'
							}
						]}
						value={page?.form?.email || null}
					/>
					<hr />
				</div>

				<div class="input">
					<TextArea
						name="contact_message"
						label="Message"
						placeholder="Comment here."
						rows={10}
						required={true}
						themeBase={'Two'}
						value={page?.form?.message || null}
						messages={[
							{
								type: 'danger',
								active: page?.form?.messageMissing,
								msg: 'A Message is required.',
								themeBase: 'Two'
							}
						]}
					/>
					<hr />
				</div>

				<div class="submit">
					<Submit
						label={'SUBMIT'}
						processingLabel={'Sending Message...'}
						{processing}
						failLabel={'Something Went Wrong.'}
						{fail}
						successLabel={'Message Sent!'}
						{success}
						themeBase={'Three'}
						--_inputs-button-font-size="1em"
						--_inputs-button-border-radius="0"
						--_inputs-button-padding=".5em 1em"
					/>
				</div>
			</form>

			<div class="aside-content">
				<GeneralContentBlock data={pageData?.content?.aside_content.main} />

				<SocialFollow
					data={{
						title: 'FOLLOW',
						padding_top: 0.5,
						icon: {
							size: 25,
							brightness: 2,
							grey_scale: 1
						}
					}}
				/>
			</div>
		</div>
	{/snippet}
{/snippet}

<style>
	.container {
		display: grid;
		/* To get an auto flow grid, you have to set width! */
		grid-template-columns: 3fr 1fr;
		max-width: 1280px;
		align-items: stretch;
		width: 100%;
		gap: 50px;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		background: var(--floral-white);
		padding: 3em;
		flex-grow: 1;
		font-family:
			Tenor Sans,
			sans-serif;
		font-size: 15px;
		font-weight: 400;
	}

	.input {
		width: 100%;
		margin-block: 20px;
	}

	.aside-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding-block: 1.5em;
	}

	:global(h3, h4, h5) {
		font-weight: bold;
		font-size: 17px;
	}

	.aside-content :global(p) {
		font-size: 15px;
		font-weight: lighter;
	}

	.submit {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: inherit;
	}
</style>
