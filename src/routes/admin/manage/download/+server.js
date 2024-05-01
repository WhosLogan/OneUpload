import database from "$lib/server/database.js";

export const GET = async ({url}) => {
    const code = url.searchParams.get("record");

    const data = await database.db.FileRequest.filter({id: code}).getFirst();
    if (!data) {
        return new Response(404);
    }

    const file = await database.files.download({
        table: 'FileRequest',
        column: 'uploaded_file',
        record: code
    });

    return new Response(file, {
        headers: {
            'Content-type': 'application/text/plain',
            'Last-Modified': new Date().toUTCString(),
            'Cache-Control': 'public, max-age=600',
            'Content-Disposition': `attachment; filename=${data.file_name}`
        }
    });
}