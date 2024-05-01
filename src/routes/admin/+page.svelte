<script>
    import {Button} from "flowbite-svelte";
    import {signIn, signOut} from "@auth/sveltekit/client";
    import {page} from "$app/stores";
</script>

<div class="flex h-screen items-center justify-center">
    <div>
        <div class="bg-gray-800 flex flex-col space-y-4 p-5 rounded-3xl">
            <h2 class="text-center text-3xl"><span class="text-primary-500">O</span>neUpload</h2>
            {#if !$page.data.session}
                <Button on:click={() => signIn("github")}>Sign In with GitHub</Button>
            {:else}
                <p class="text-gray-300">You are not permitted to view this page</p>
                <Button on:click={() => signOut()}>Sign Out</Button>
            {/if}
        </div>
    </div>
</div>