<script lang="ts">
	import { setTheme } from '$lib/config/setTheme';
	import type { props } from './utils/propTypes.types';

	let { label, onclick = () => {}, themeBase = 'One' }: props = $props();

	let theme = $state(setTheme(themeBase, 'form'));
	$effect(() => {
		theme = setTheme(themeBase, 'form');
	});
</script>

<input
	style="--_background: var({theme.one}); 
	--_input-background: var({theme.two}); 
	--_input-background-hover: var({theme.three});
	--_label-text: var({theme.four});
	--_input-text: var({theme.five});
	--_placeholder: var({theme.six});
	--_highlight: var({theme.seven}); 
	--_success: var({theme.eight});
	--_warn: var({theme.nine});
	--_error: var({theme.ten});"
	{onclick}
	type="button"
	value={label}
/>

<style>
	input[type='button'] {
		margin: var(--_inputs-button-margin, 10px 0px 0px 0px);
		width: var(--_inputs-button-width, 100%);
		opacity: var(--_inputs-button-opacity, 1);
		font-family: inherit;
		font-size: var(--_inputs-button-font-size, 1.3em);
		padding: var(--_inputs-button-padding, 0.25em 0.5em);
		border: solid 1px var(--_label-text);
		border-radius: var(--_inputs-button-border-radius, 0.25em);
		color: var(--_label-text);
		background: color-mix(in lab, var(--_background), var(--_highlight) 40%);
		font-weight: var(--_inputs-button-font-weight, 300);
	}

	input[type='button']:hover,
	input[type='button']:focus,
	input[type='button']:focus-within {
		color: var(--_label-text);
		background-color: color-mix(in lab, var(--_highlight), transparent 10%);
		border: solid 1px var(--_label-text);
	}

	input[type='button']:focus {
		outline: none !important;
		border: solid 1px var(--_highlight);
	}

	input[type='button']:active {
		transform: translateY(1px);
	}
</style>
