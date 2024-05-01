import database from "$lib/server/database.js";
import {randomBytes} from "crypto"

export const load = async () => {
    const files = await database.db.FileRequest.select(['secret', 'fulfilled', 'id',
        'fulfillment_date', 'name', 'note', 'max_size', 'file_name']).getMany();
    return {
        files: files
    };
}

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const note = data.get('note');
        const maxSize = data.get('max_size');

        let secret = randomBytes(6).toString('hex');
        secret = `${secret.substring(0, 4)}-${secret.substring(4, 8)}-${secret.substring(8, 12)}`.toUpperCase();

        await database.db.FileRequest.create({
            name: name,
            note: note,
            max_size: parseInt(maxSize),
            secret: secret,
        })
    },
    delete: async ({request}) => {
        const data = await request.formData();
        const file = data.get('file');

        try {
            await database.db.FileRequest.delete(file);
        } catch {
            // Empty exception
        }
    }
}