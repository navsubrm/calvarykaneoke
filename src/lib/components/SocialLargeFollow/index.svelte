<script lang="ts">
	import model from './utils/model';
	import type { Props } from './utils/props.types';

	let { data = $bindable(model) }: Props = $props();
</script>

<div
	style="--_brightness: {data?.main?.brightness}; --_grey-scale: {data?.main
		?.grey_scale}; --_icon-size: {data?.main?.size}px;"
>
	<div class="flex social-links">
		{#each data?.social_links as { label, href, alt, imgUrl, location }}
			{#if location == 'social'}
				<a class="social-link-img" {href} target="_blank">
					<img src={imgUrl} {alt} />
					<small class="social-link-label">{label}</small>
				</a>
			{/if}
		{/each}
	</div>
</div>

<style>
	.social-links {
		display: grid;
		/* To get an auto flow grid, you have to set width! */
		grid-template-columns: repeat(auto-fit, minmax(300px, auto));
		max-width: 1280px;
		align-items: stretch;
		width: 100%;
		row-gap: 50px;
	}

	.social-link-img {
		filter: brightness(var(--_brightness)) grayscale(var(--_grey-scale));
		opacity: 0.8;
		scale: 1;
		transition: all 0.25s ease-in-out;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-block: 20px;
		text-decoration: none;
	}

	.social-link-img img {
		height: var(--_icon-size);
		width: auto;
	}

	.social-link-img:hover {
		opacity: 1;
		scale: 1.025;
	}

	.social-link-label {
		color: var(--gold);
		font-size: 15px;
		margin-block: 20px;
		/* padding-bottom: 30px; */
		width: max-content;
		opacity: 1;
		transition: all 0.5s ease-in-out allow-discrete;
	}

	.social-link-img:hover > .social-link-label {
		text-decoration: underline;
	}
</style>
