<script>
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';
	import MainButton from '$lib/userInputs/MainButton/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.socialFooter, blank));

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.socialFooter, blank);
	});
</script>

<svelte:head>
	<meta property="og:url" content="https://www.jdfarag.org/livestream/primary" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Calvary Kaneohe Livestream" />
	<meta property="og:description" content="JD is live! Come check it out." />
	<meta property="og:image" content="https://www.jdfarag.org/images/JD_duotone_1.webp" />
</svelte:head>

<div class="component-footer">
	<Editor bind:pageData bind:reset />
	<div class="share-items">
		<p>Share:</p>
		<span class="facebook">
			<a
				aria-label="Share on Facebook"
				href="https://www.facebook.com/sharer/sharer.php?u=https://{encodeURIComponent(
					pageData?.content?.facebook_share_link
				)}"
				target="_blank"
			>
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					enable-background="new 0 0 24 24"
					xml:space="preserve"
					class="eapps-social-share-buttons-item-icon"
				>
					<path
						fill="%233E68C0"
						d="M5.677,12.998V8.123h3.575V6.224C9.252,2.949,11.712,0,14.736,0h3.94v4.874h-3.94 c-0.432,0-0.934,0.524-0.934,1.308v1.942h4.874v4.874h-4.874V24H9.252V12.998H5.677z"
					></path>
				</svg>
			</a>
		</span>
		<span class="x-twitter">
			<a
				aria-label="Share on X"
				class="twitter-share-button"
				href="https://twitter.com/intent/tweet?text={encodeURIComponent(
					pageData?.content?.x_post_text
				)}"
				data-size="large"
				target="_blank"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="eapps-social-share-buttons-item-icon"
				>
					<path
						d="M17.4636 3.40479H20.3771L14.012 10.6865L21.5 20.5953H15.637L11.0448 14.5857L5.79041 20.5953H2.87519L9.68324 12.8067L2.5 3.40479H8.51187L12.6628 8.89781L17.4636 3.40479ZM16.4411 18.8498H18.0555L7.63466 5.0586H5.90226L16.4411 18.8498Z"
						fill="white"
					></path>
				</svg>
			</a>
		</span>
		<span class="email">
			<a
				aria-label="Share with Email"
				href="mailto:?subject={encodeURIComponent(
					pageData?.content?.mail_to?.subject
				)}&body={encodeURIComponent(pageData?.content?.mail_to?.body)}"
				target="_blank"
			>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					enable-background="new 0 0 24 24"
					xml:space="preserve"
					class="eapps-social-share-buttons-item-icon"
				>
					<path
						d="M23.674,3.741c-0.338-0.495-0.907-0.823-1.549-0.823H1.876c-0.629,0-1.184,0.316-1.525,0.794l11.687,9.745 L23.674,3.741z"
					></path>
					<path
						d="M12.037,16.409L0,6.371v12.836c0,1.031,0.844,1.875,1.875,1.875h20.249c1.031,0,1.875-0.844,1.875-1.875 V6.421L12.037,16.409z"
					></path>
				</svg>
			</a>
		</span>
	</div>

	<div class="share-items abc-link">
		<p>ABC PDFs & Transcripts:</p>
		<MainButton href={'/abcs'} label={'ABC PDFs'} />
		<!-- <a href="/abcs" class="button">ABC PDFs</a> -->
	</div>
</div>

<style>
	.component-footer {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
		align-items: center;
		padding-block: 1.5em;
		border-top: solid 1px var(--deep-purple);
	}

	.share-items {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}

	.component-footer p {
		font-family:
			Open Sans,
			sans-serif;
		font-weight: 700;
		color: var(--darkness);
		font-size: 14px;
	}

	.share-items span {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--darkness);
		width: 40px;
		height: 40px;
		border-radius: 0.25em;
		transition: all 0.2s linear;
	}

	.share-items svg {
		fill: var(--floral-white);
		height: 15px;
		width: 15px;
	}

	.facebook:hover {
		background: #1877f2;
		opacity: 0.5;
	}

	.x-twitter:hover {
		opacity: 0.5;
	}

	.email:hover {
		background: var(--gold);
		opacity: 0.8;
	}
	/* 
	.button {
		display: flex;
		background: white;
		color: var(--gold);
		letter-spacing: 1px;
		text-transform: uppercase;
		vertical-align: middle;
		background-color: var(--floral-white);
		border: 1px solid var(--gold);
		justify-content: center;
		align-items: stretch;
		padding: 10px 13px 10px 15px;
		font-size: 12px;
		transition: all 0.25s linear;
		text-decoration: none;
	}

	.button:hover {
		background: var(--deep-purple);
		color: var(--floral-white);
		border: solid 0.25px var(--deep-purple);
	} */

	@media (min-width: 700px) {
		.component-footer {
			justify-content: space-between;
		}
	}
</style>
