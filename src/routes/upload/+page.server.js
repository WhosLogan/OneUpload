import {fail, redirect} from "@sveltejs/kit";
import database from "$lib/server/database.js";

export const load = async ({url}) => {
    const code = url.searchParams.get("code");
    if (!code) {
        return redirect(302, '/');
    }
    let file = await database.db.FileRequest.filter({secret: code}).getFirst();
    if (!file) {
        return redirect(302, '/');
    }
    return {
        fulfilled: file.fulfilled,
        name: file.name,
        max_size: file.max_size,
    }
}

export const actions = {
    default: async ({url, request}) => {
        const code = url.searchParams.get("code");
        const formData = await request.formData();
        const file = formData.get('file');

        let fileRequest = await database.db.FileRequest.filter({secret: code}).getFirst();
        if (!fileRequest || fileRequest.fulfilled) {
            return redirect(302, '/');
        }

        if (Math.ceil(file.size / 1024 / 1024) > fileRequest.max_size) {
            return fail(400, {
                success: false,
                message: "File size is too large.",
            })
        }

        await database.db.FileRequest.update(fileRequest.id, {
            fulfilled: true,
            file_name: file.name,
            fulfillment_date: new Date(Date.now()).toISOString(),
        })

        await database.files.upload({ table: 'FileRequest', column: 'uploaded_file', record: fileRequest.id }, new Uint8Array(await file.arrayBuffer()));

        return {}
    }
}