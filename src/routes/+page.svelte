<script>
	import Booklist from "$lib/components/booklist.svelte";
	import Booklistform from "$lib/components/booklistform.svelte";
	import { signIn } from "@auth/sveltekit/client"
	import { page } from "$app/stores";
</script>
<div>
    <Booklistform/>
</div>

