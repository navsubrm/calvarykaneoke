<script>
	let { children } = $props();
</script>

<header>
	<ul>
		<li><a href="/admin">Home</a></li>
	</ul>
</header>
{@render children?.()}
