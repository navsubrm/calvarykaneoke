<script lang="ts">
	import { page } from '$app/state';
	import MailingListForm from './utils/MailingListForm.svelte';

	const links = $state(page?.data?.links);
</script>

<footer
	class="flex"
	style="
		--_background: url({page?.data?.footer?.topBarImage}); 
		--_component-height: {page?.data?.footer?.componentHeight}vh;
	"
>
	<div class="top-bar"></div>
	<div class="footer-content flex">
		<div class="logo">
			<h2>JD FARAG</h2>
		</div>

		<MailingListForm />

		<div class="flex nav-links">
			{#each links as { label, href, alt, location }}
				{#if location == 'footer-link'}
					<a {href} title={alt}>{label}</a>
				{/if}
			{/each}
		</div>

		<div class="flex social-links">
			{#each links as { label, href, alt, imgUrl, location }}
				{#if location == 'footer-social'}
					<a class="social-link-img" {href} target="_blank">
						<img src={imgUrl} {alt} />
						<small class="social-link-label">{label}</small>
					</a>
				{/if}
			{/each}
		</div>
	</div>

	<small class="copyright">© Copyright {new Date().getFullYear()} J.D. Farag</small>
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
		height: var(--_component-height);
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
		position: relative;
		flex-wrap: wrap;
		gap: 25px;
		padding-top: 2.5em;
	}

	.social-link-img {
		filter: brightness(2.9) grayscale(1);
		opacity: 0.6;
		scale: 1;
		transition: all 0.25s ease-in-out;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.social-link-img img {
		height: 20px;
		width: 20px;
	}

	.social-link-img:hover {
		opacity: 1;
		scale: 1.05;
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

	.copyright {
		color: #545454;
		font-size: 9px;
		position: absolute;
		inset: auto auto 6% 3%;
	}

	.social-link-label {
		display: none;
		position: absolute;
		bottom: -15px;
		color: #545454;
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
