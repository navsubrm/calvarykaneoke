<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { setTheme } from '$lib/config/setTheme';
	import Hamburger from '$lib/icons/hamburger/Hamburger.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';
	import FormButton from '../button/FormButton.svelte';
	import type { Props } from './utils/props.types';

	let {
		action = '?/edit',
		buttonTitle = 'Edit Content',
		label = 'Update Content',
		processingLabel = 'Processing...',
		failLabel = 'Something went wrong. Please try again.',
		successLabel = 'Content Updated Successfully.',
		reset = $bindable(false),
		children
	}: Props = $props();

	const theme = $state(setTheme('One', 'form'));

	let form: HTMLFormElement | undefined = $state();
	let active = $state(false);

	let processing = $state(page?.form?.processing || false);
	let fail = $state(page?.form?.fail || false);
	let success = $state(page?.form?.success || false);

	const onsubmit = (e: SubmitEvent) => {
		e.preventDefault();
		processing = true;
		form?.submit();
	};
	const oncancel = (e: MouseEvent) => {
		e.preventDefault();
		reset = !reset;
		active = false;
	};
</script>

<div class="edit">
	<button class="edit-outer" onclick={() => (active = !active)}>
		<div class="edit-inner">{buttonTitle}</div>
	</button>
</div>

<div
	style="--_background: var({theme.one}); --_text: var({theme.two})"
	class="content-editor"
	class:active
>
	<button onclick={() => (active = false)}><Hamburger active={true} /></button>

	<h4>{buttonTitle}</h4>

	<form {action} method="POST" bind:this={form} {onsubmit} use:enhance>
		{#key reset}
			{@render children?.()}
		{/key}
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
</div>

<style>
	.edit {
		position: absolute;
		top: 10vh;
		right: 5vw;
		display: grid;
		grid-template-areas: 'edit';
		z-index: 10000;
	}

	.edit::before {
		position: absolute;
		content: '';
		inset: -5px;
		border-radius: 30px;
		background: color-mix(in lab, var(--white-smoke), transparent 80%);
		backdrop-filter: blur(1px);
		z-index: 0;
	}

	.edit-outer {
		grid-area: edit;
		padding: 1em 1.25em;
		border: none;
		border-radius: 25px;
		background: linear-gradient(
			to top,
			var(--darkness),
			color-mix(in lab, var(--darkness), var(--white-smoke) 20%)
		);
		z-index: 1;
	}

	.edit-inner {
		grid-area: edit;
		position: relative;
		padding: 0.75em 1em;
		border: none;
		border-radius: 15px;
		background: linear-gradient(
			to bottom,
			var(--darkness),
			color-mix(in lab, var(--darkness), var(--white-smoke) 30%)
		);
		color: var(--white-smoke);
		font-size: 1.3em;
		z-index: 2;
	}

	.content-editor {
		--_height: 50px;
		--_line-color: var(--white);
		--_line-color-hover: var(--burlywood);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: auto;
		width: 100%;
		max-width: 500px;
		background: var(--_background);
		transform: translateX(100%);
		z-index: 1000000;
		padding: 2em;
		transition: all 0.5s linear;
		overflow-y: scroll;
		overscroll-behavior: contain;
	}

	.content-editor button {
		background: none;
		border: none;
	}

	.active {
		transform: translateX(0);
		box-shadow: -10px 0px 40px color-mix(in lab, var(--white-smoke), var(--darkness) 80%);
	}

	form :global(> *) {
		margin-block: 2em;
	}

	h4 {
		color: var(--_text);
	}
</style>
