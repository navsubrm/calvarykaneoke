<script>
	let { children } = $props();
</script>

<header>
	<ul>
		<li><a href="/admin">Home</a></li>
		<li><a href="/admin/live">Live</a></li>
		<li><a href="/admin/abc">ABCs</a></li>
		<li><a href="/admin/exemption">Exemption</a></li>
		<li><a href="/admin/about">About</a></li>
	</ul>
</header>
{@render children?.()}
