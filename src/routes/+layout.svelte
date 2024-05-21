<script>
	import Bottomnav from '$lib/components/bottomnav.svelte';
import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>bookstore</title>
</svelte:head>
<div>
	<Nav />
</div>
<div class="p-2">
	<!-- Page Content-->
	<slot />
</div>
<div>
  <Bottomnav/>
</div>
