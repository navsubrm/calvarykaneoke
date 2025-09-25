<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let chev1 = $state();
	let chev2 = $state();
	let chev3 = $state();

	onMount(() => {
		if (chev1 && chev2 && chev3) {
			const tl = gsap.timeline({
				repeat: -1,
				duration: 1.5,
				ease: 'power1.inOut',
				repeatDelay: 1.5
			});
			tl.to([chev1, chev2, chev3], { opacity: 0.35, stagger: 0.75 });
			tl.to([chev1, chev2, chev3], { opacity: 0, stagger: 0.75 }, '>');
		}
	});
</script>

<div bind:this={chev1} class="chevron chev-1"></div>
<div bind:this={chev2} class="chevron chev-2"></div>
<div bind:this={chev3} class="chevron chev-3"></div>

<style>
	.chevron {
		justify-self: flex-end;
		height: 20px;
		width: 20px;
		border-right: solid 3px var(--white);
		border-bottom: solid 3px var(--white);
		opacity: 0;
	}

	.chev-1 {
		margin-top: 1.5em;
		transform: rotate(45deg);
	}
	.chev-2 {
		transform: rotate(45deg) translate(-15px, -15px);
	}
	.chev-3 {
		transform: rotate(45deg) translate(-30px, -30px);
	}
</style>
