<script>
    import {Button, Fileupload} from "flowbite-svelte";
    import {enhance} from "$app/forms";

    export let data;
    let files;
    let size = 0;

    $: if (files && files.length > 0) {
        size = Math.ceil(files[0].size / 1024 / 1024); // Get the file size in MB
        if (size > data.max_size) {

        }
    }
</script>

{#if data.fulfilled}
    <div class="flex h-screen items-center justify-center">
        <div>
            <div class="bg-gray-800 flex flex-col space-y-4 p-5 rounded-3xl">
                <h2 class="text-center text-3xl"><span class="text-primary-500">O</span>neUpload</h2>
                <p class="text-gray-300">Thank you, {data.name}, your file has been received.</p>
            </div>
        </div>
    </div>
{:else}
    <div class="flex h-screen items-center justify-center">
        <div>
            <form class="bg-gray-800 flex flex-col space-y-4 p-5 rounded-3xl" use:enhance method="post" enctype="multipart/form-data">
                <h2 class="text-center text-3xl"><span class="text-primary-500">O</span>neUpload</h2>
                <p class="text-gray-300 text-center">{data.name}, please upload your file below (max size {data.max_size}mb)</p>
                <Fileupload bind:files type="file" id="file" name="file" required />
                <Button type="submit">Upload</Button>
            </form>
        </div>
    </div>
{/if}
