<script>
    import {Button, Input} from "flowbite-svelte";

    let uploadCode = "";
</script>

<div class="flex h-screen items-center justify-center">
    <div>
        <div class="bg-gray-800 flex flex-col space-y-4 p-5 rounded-3xl">
            <h2 class="text-center text-3xl"><span class="text-primary-500">O</span>neUpload</h2>
            <p class="text-gray-300">To begin uploading a file, please enter your upload code.</p>
            <Input bind:value={uploadCode} type="text" placeholder="XXXX-XXXX-XXXX" />
            <Button href='/upload?code={uploadCode}'>Continue</Button>
        </div>
    </div>
</div>