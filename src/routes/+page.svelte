<script>
    import {Button, Input} from "flowbite-svelte";

    let uploadCode = "";

    function onCodeType() {
        // Make sure all characters are uppercase
        uploadCode = uploadCode.toUpperCase();

        // If the upload code is longer than 12 then remove the last character
        if (uploadCode.length > 14) {
            uploadCode = uploadCode.substring(0, uploadCode.length - 1);
            return;
        }

        if (uploadCode.replaceAll('-', '').length % 4 === 0 && uploadCode.length !== 14 && uploadCode.length !== 0) {
            uploadCode += '-';
        }
    }
</script>

<div class="flex h-screen items-center justify-center">
    <div>
        <div class="bg-gray-800 flex flex-col space-y-4 p-5 rounded-3xl">
            <h2 class="text-center text-3xl"><span class="text-primary-500">O</span>neUpload</h2>
            <p class="text-gray-300">To begin uploading a file, please enter your upload code.</p>
            <Input on:input={onCodeType} bind:value={uploadCode} type="text" placeholder="XXXX-XXXX-XXXX" />
            <Button href='/upload?code={uploadCode}' disabled={uploadCode.length !== 14}>Continue</Button>
        </div>
    </div>
</div>
