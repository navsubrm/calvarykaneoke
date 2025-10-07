<script lang="ts">
	import type { Props } from './utils/props.types';
	import isJson from '$lib/config/helperFunctions/isJson';

	let { data, classes = '' }: Props = $props();
</script>

{#if isJson(data)}
	<div class={classes}>
		{@html JSON.parse(data)?.html}
	</div>
{/if}
