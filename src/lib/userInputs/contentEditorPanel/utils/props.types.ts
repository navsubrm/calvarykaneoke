import type { Snippet } from 'svelte';

export interface Props {
	buttonTitle: string;
	processing: boolean;
	fail: boolean;
	success: boolean;
	processingLabel?: string;
	failLabel?: string;
	successLabel?: string;
	children: Snippet;
	onsubmit: (e: SubmitEvent) => void;
}
