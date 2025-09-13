import type { Snippet } from 'svelte';

export interface Props {
	action: string;
	buttonTitle: string;
	label?: string;
	processingLabel?: string;
	failLabel?: string;
	successLabel?: string;
	reset: boolean;
	children: Snippet;
}
