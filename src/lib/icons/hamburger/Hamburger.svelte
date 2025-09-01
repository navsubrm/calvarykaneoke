<script lang="ts">
	import type { props } from './utils/hamburger.types';

	let { active = $bindable(false) }: props = $props();
	let circle: SVGCircleElement | undefined = $state();
</script>

<svg class="menu" viewBox="0 0 56 56" fill="none" stroke-width="2" class:active>
	<circle bind:this={circle} class="circle" cx="28" cy="28" r="25" stroke-width="2" />
	<rect class="line upper" height="2" width="34" x="11" y={active ? 27 : 17} rx="1" />
	<rect class="line middle" height="2" width="34" x="11" y="27" rx="1" />
	<rect class="line lower" height="2" width="34" x="11" y={active ? 27 : 37} rx="1" />
</svg>

<style>
	svg {
		--_speed: 300ms;
		height: var(--_height, 30px);
		width: var(--_height, 30px);
		margin: var(--_margin, 0);
		padding: var(--_padding, 0);
	}

	.line,
	.circle {
		transition:
			transform var(--_speed) ease-in,
			y var(--_speed) ease-in var(--_speed),
			stroke-width calc(var(--_speed) * 2) ease-in,
			scale var(--_speed) ease-in,
			opacity 0ms var(--_speed);
		transform-origin: center;
	}

	.active .line,
	.active .circle {
		transition:
			y var(--_speed) ease-in,
			stroke-width calc(var(--_speed) * 2) ease-in,
			transform var(--_speed) ease-in var(--_speed),
			scale var(--_speed) ease-in var(--_speed),
			opacity 0ms var(--_speed);
	}

	.circle {
		stroke: var(--_circle-color);
	}

	.line {
		stroke: var(--_line-color);
	}

	.active circle {
		stroke-width: 4;
	}

	.active :is(.upper, .lower) {
		scale: 0.85;
	}

	.active .upper {
		transform: rotate(45deg);
	}

	.active .middle {
		opacity: 0;
	}

	.active .lower {
		transform: rotate(-45deg);
	}

	.menu:hover .circle {
		stroke: var(--_circle-color-hover);
	}

	.menu:hover .line {
		stroke: var(--_line-color-hover);
	}
</style>
