<script lang="ts">
	import { page } from '$app/state';
	import model from '$lib/components/SocialFollow/utils/model';
	import type { Props } from './utils/props.types';

	let { data = $bindable(model) }: Props = $props();
</script>

<div
	style="--_padding-top: {data?.padding_top}em; --_brightness: {data?.icon
		?.brightness}; --_grey-scale: {data?.icon?.grey_scale}; --_icon-size: {data?.icon?.size}px;"
>
	{#if data?.title}
		<p class="share-text">{data?.title}</p>
	{/if}
	<div class="flex social-links">
		{#each page?.data?.links as { label, href, alt, imgUrl, location }}
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
	.share-text {
		color: inherit;
		letter-spacing: 1px;
		margin-bottom: 1px;
		margin-right: 10px;
		padding-top: 10px;
		font-family: 'Tenor Sans', sans-serif;
		font-size: 12px;
	}

	.flex {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
	}

	.social-links {
		position: relative;
		flex-wrap: wrap;
		gap: 25px;
		padding-top: var(--_padding-top);
	}

	.social-link-img {
		filter: brightness(var(--_brightness)) grayscale(var(--_grey-scale));
		opacity: 0.6;
		scale: 1;
		transition: all 0.25s ease-in-out;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.social-link-img img {
		height: var(--_icon-size);
		width: auto;
	}

	.social-link-img:hover {
		opacity: 1;
		scale: 1.05;
	}

	.social-link-label {
		display: none;
		position: absolute;
		bottom: -15px;
		color: inherit;
		font-size: 9px;
		letter-spacing: -0.25px;
		width: max-content;
		opacity: 0;
		transition: all 0.5s ease-in-out allow-discrete;
	}

	.social-link-img:hover > .social-link-label {
		display: block;
		opacity: 1;
	}
</style>
