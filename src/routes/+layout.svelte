<script>
	import { page } from '$app/stores';
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
	{#if $page.data.session}
		<slot />
	{:else}
		<div class="flex gap-2">
			<div class="card w-full bg-base-200 shadow-md">
				<div class="card-body">
					<div class="card-title">Sign In</div>
				</div>
			</div>
		</div>
	{/if}
</div>
<div>
	<Bottomnav />
</div>
