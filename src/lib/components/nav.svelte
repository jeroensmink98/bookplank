<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from "@auth/sveltekit/client"
</script>

<div class="navbar bg-base-100 flex justify-between">
	<a class="btn btn-ghost text-xl" href="/">Bookplank.app</a>
	{#if $page.data.session}
		<button on:click={signOut} class="btn btn-primary">Sign Out</button>
	{:else}
		<button on:click={signIn} class="btn btn-primary">Sign In</button>
	{/if}
</div>
<hr />
