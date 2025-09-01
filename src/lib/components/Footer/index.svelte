<script lang="ts">
	import { page } from '$app/state';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';
	import MailingListForm from './utils/MailingListForm.svelte';

	type Props =
		| SliceComponentProps<Content.FooterSlice>
		| { slice: { slice_type: 'header'; variation: 'default' } };
	const { slice }: Props = $props();

	const navLinks = $state(page?.data?.footer?.data?.navigation_links);
	const socialIcons = $state(page?.data?.footer?.data?.social_media_links);
	const topBarImage = $state(page?.data?.footer?.data?.footer_top_image?.url);
</script>

<footer
	class="flex"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	style="--_background: url({topBarImage})"
>
	<div class="top-bar"></div>
	<div class="footer-content flex">
		<div class="logo">
			<h2>JD FARAG</h2>
		</div>

		<MailingListForm />

		<div class="flex nav-links">
			{#each navLinks as link}
				<PrismicLink field={link} />
			{/each}
		</div>

		<div class="flex social-links">
			{#each socialIcons as { icon_image, icon_link }}
				<a class="social-link-img" href={icon_link.url} target="_blank">
					<PrismicImage field={icon_image} />
				</a>
			{/each}
		</div>
	</div>

	<small>© Copyright {new Date().getFullYear()} J.D. Farag</small>
</footer>

<style>
	.top-bar {
		background-image: var(--_background);
		background-position: 50% 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
		height: 12px;
		width: 100%;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	footer {
		position: relative;
		flex-direction: column;
		min-height: 30vh;
		background: var(--darkness);
		padding-bottom: 3em;
	}

	.footer-content {
		flex-direction: column;
		padding: 1em;
	}

	.nav-links,
	.social-links {
		flex-wrap: wrap;
		gap: 25px;
		padding-top: 2.5em;
	}

	.social-link-img {
		filter: brightness(2.9) grayscale(1);
		opacity: 0.6;
		scale: 1;
		transition: all 0.25s ease-in-out;
	}

	.social-link-img:hover {
		opacity: 1;
		scale: 1.1;
	}

	h2 {
		color: var(--white);
		letter-spacing: 3px;
	}

	.logo {
		font-size: 15px;
		font-weight: 800;
		font-family:
			Tenor Sans,
			sans-serif;
		padding-bottom: 2em;
		padding-top: 3em;
	}

	footer :global(a) {
		text-decoration: none;
		text-transform: uppercase;
		color: var(--burlywood);
		font-size: 11px;
		letter-spacing: 2.5px;
		font-family:
			Tenor Sans,
			sans-serif;
	}

	small {
		color: #545454;
		font-size: 9px;
		position: absolute;
		inset: auto auto 6% 3%;
	}
</style>
