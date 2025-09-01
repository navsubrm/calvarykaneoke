<script lang="ts">
	import { setTheme } from '$lib/config/setTheme';
	import Hamburger from '$lib/icons/hamburger/Hamburger.svelte';
	import Submit from '$lib/userInputs/submit/Submit.svelte';
	import type { Props } from './utils/props.types';

	let {
		buttonTitle = 'Edit Content',
		processing = $bindable(false),
		processingLabel = $bindable('Processing...'),
		fail = $bindable(false),
		failLabel = $bindable('Something went wrong. Please try again.'),
		success = $bindable(false),
		successLabel = $bindable('Content Updated Successfully.'),
		children,
		onsubmit = (e: SubmitEvent) => {
			e.preventDefault();
		}
	}: Props = $props();

	let theme = $state({ form: 'One', content: 'One' });
	let active = $state(false);
	const form = $state(setTheme(theme.form, 'form'));
</script>

<div class="edit">
	<button class="edit-outer" onclick={() => (active = !active)}>
		<div class="edit-inner">{buttonTitle}</div>
	</button>
</div>

<div
	style="--_background: var({form.one}); --_text: var({form.two})"
	class="content-editor"
	class:active
>
	<button onclick={() => (active = false)}><Hamburger active={true} /></button>

	<h4>{buttonTitle}</h4>

	<form action="/" {onsubmit}>
		{@render children?.()}
		<Submit
			label={'Update Content'}
			{processingLabel}
			{processing}
			{failLabel}
			{fail}
			{successLabel}
			{success}
			themeBase={'One'}
		/>
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
