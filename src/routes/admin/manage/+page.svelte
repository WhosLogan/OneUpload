<script>
    import {
        Button, ButtonGroup,
        Input,
        NumberInput,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";

    import {enhance} from "$app/forms";
    import {page} from "$app/stores";

    export let data;

    function copyUploadLink(file) {
        navigator.clipboard.writeText(`${$page.url.origin}/upload?code=${file.secret}`);
    }
</script>

<h2 class="text-3xl text-center my-10">Manage Uploads</h2>

{#if data.files.length !== 0}
    <div class="flex justify-center">
        <div class="w-5/6 lg:w-1/2">
            <Table>
                <TableHead>
                    <TableHeadCell>Secret</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Note</TableHeadCell>
                    <TableHeadCell>Max Size</TableHeadCell>
                    <TableHeadCell />
                </TableHead>
                <TableBody tableBodyClass="divide-y">
                    {#each data.files as file}
                        <TableBodyRow>
                            <TableBodyCell>{file.secret}</TableBodyCell>
                            <TableBodyCell>{file.name}</TableBodyCell>
                            <TableBodyCell>{file.note === undefined ? 'N/A' : file.note}</TableBodyCell>
                            <TableBodyCell>{file.max_size}mb</TableBodyCell>
                            <TableBodyCell>
                                <form method="post" use:enhance>
                                    <input name="file" value={file.id} hidden />
                                    <ButtonGroup>
                                        {#if !file.fulfilled}
                                            <Button on:click={() => copyUploadLink(file)}>Copy Link</Button>
                                        {:else}
                                            <Button href="/admin/manage/download?record={file.id}">Download</Button>
                                        {/if}
                                        <Button formaction="?/delete" type="submit">Delete</Button>
                                    </ButtonGroup>
                                </form>
                            </TableBodyCell>
                        </TableBodyRow>
                    {/each}
                </TableBody>
            </Table>
        </div>
    </div>

    <div class="flex justify-center mt-3">
        <form class="flex w-2/3 flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5"
              method="post" use:enhance action="?/create">
            <Input name="name" placeholder="Name"/>
            <Input name="note" placeholder="Note"/>
            <NumberInput name="max_size" placeholder="Max Size"/>
            <Button type="submit" class="md:w-2/4">Create Upload</Button>
        </form>
    </div>
{:else}
    <div class="flex justify-center mt-3">
        <form class="flex w-2/3 flex-col space-y-3" method="post" use:enhance action="?/create">
            <Input name="name" placeholder="Name"/>
            <Input name="note" placeholder="Note"/>
            <NumberInput name="max_size" placeholder="Max Size"/>
            <Button type="submit">Create Upload</Button>
        </form>
    </div>
{/if}
