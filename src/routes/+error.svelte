<script lang="ts">
	import { page } from '$app/state';
	import GradientSection from '$lib/components_style/GradientSection/Index.svelte';
	import GeneralContent from '$lib/components_style/GeneralContent/Index.svelte';

	$inspect('Page from error: ', page);

	const pageData = {
		content: {
			background: {
				upper: '#d3cdc0',
				base: '#d3cdc0',
				lower: '#271254cc'
			}
		}
	};
</script>

<GradientSection Children={contentStyling} bind:data={pageData.content.background} />

{#snippet contentStyling()}
	<GeneralContent Children={content} />
	{#snippet content()}
		<div class="error-page-content">
			<h1 class="error-page-header">{page.status}: {page?.error?.message}</h1>

			<p class="error-page-content">
				If you require assistance with this error, Please <a href="/contact">contact us</a>.
			</p>
		</div>
	{/snippet}
{/snippet}

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: cetner;
		align-items: center;
		gap: 2em;
	}
</style>
