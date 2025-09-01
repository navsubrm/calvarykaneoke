import type { Snippet } from 'svelte';

export interface Props {
	buttonTitle: string;
	active: boolean;
	processing: boolean;
	fail: boolean;
	success: boolean;
	processingLabel?: string;
	failLabel?: string;
	successLabel?: string;
	children: Snippet;
	onsubmit: (e: SubmitEvent) => void;
	oncancel: (e: MouseEvent) => void;
}
