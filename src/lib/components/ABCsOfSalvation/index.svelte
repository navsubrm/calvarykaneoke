<script lang="ts">
	import { page } from '$app/state';
	import Editor from './utils/Editor.svelte';
	import { componentDataConverter } from '$lib/config/componentDataConverter';
	import blank from './utils/blank';
	import SocialFooter from '../SocialFooter/index.svelte';

	let reset = $state(false);
	let pageData = $state(componentDataConverter(page?.data?.abcs, blank));

	$effect(() => {
		reset;
		pageData = componentDataConverter(page?.data?.abcs, blank);
	});

	$inspect('Page data from ABCs: ', pageData);
</script>

<section
	style="--_component-height: {pageData?.content?.component_height}vh; 
		--_background-base: {pageData?.content?.background_color};
		--_gradient-upper: {pageData?.content?.gradient_upper};
		--_gradient-lower: {pageData?.content?.gradient_lower};"
>
	<Editor bind:pageData bind:reset />

	<div class="content">
		<div class="flex-content">
			<img src="/images/1Asset-10A3.svg" alt="The letter A" />
			<div class="content_text">
				<p>
					ADMIT THAT YOU’RE A SINNER. This is where that godly sorrow leads to genuine repentance
					for sinning against the righteous God and there is a change of heart, we change our mind
					and God changes our hearts and regenerates us from the inside out.
				</p>
			</div>
		</div>
		<div class="flex-content">
			<img src="/images/1Asset-10A3.svg" alt="The letter A" />
			<div class="content_text">
				<p>
					ADMIT THAT YOU’RE A SINNER. This is where that godly sorrow leads to genuine repentance
					for sinning against the righteous God and there is a change of heart, we change our mind
					and God changes our hearts and regenerates us from the inside out.
				</p>
			</div>
		</div>
		<div class="flex-content">
			<img src="/images/1Asset-10A3.svg" alt="The letter A" />
			<div class="content_text">
				<p>
					ADMIT THAT YOU’RE A SINNER. This is where that godly sorrow leads to genuine repentance
					for sinning against the righteous God and there is a change of heart, we change our mind
					and God changes our hearts and regenerates us from the inside out.
				</p>
			</div>
		</div>
		<!-- Add the ABCs content block with images.  Transparent Background. -->

		<SocialFooter />
	</div>
</section>

<style type="text/css">
	section {
		position: relative;
		--_footer-padding: 2.5em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--_footer-padding);
		padding-top: calc(var(--_footer-padding) + 10vh);
		min-height: fit-content;
		height: var(--_component-height, 90vh);
		background: linear-gradient(to bottom, var(--_gradient-upper) 42%, var(--_gradient-lower));
	}

	.content {
		width: 100%;
	}

	.flex-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flex-content img {
		max-width: 60px;
		margin-right: 10px;
		padding-top: 5px;
		margin-block: 1em;
	}

	@media (min-width: 600px) {
		section {
			--_footer-padding: 4em;
			padding: var(--_footer-padding);
			padding-top: calc(3em * 2);
		}

		.content {
			width: 90%;
			max-width: 950px;
		}
	}
</style>
