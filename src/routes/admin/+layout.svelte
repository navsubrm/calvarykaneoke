<script>
	let { children } = $props();
</script>

<header>
	<ul>
		<li><a href="/admin">Home</a></li>
		<li><a href="/admin/live">Live</a></li>
		<li><a href="/admin/salvation-abc">ABCs</a></li>
	</ul>
</header>
{@render children?.()}
