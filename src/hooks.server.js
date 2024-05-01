import {sequence} from "@sveltejs/kit/hooks";
import {redirect} from "@sveltejs/kit";
import { handle as authHandle } from "$lib/server/auth.js"
import {EMAIL} from "$env/static/private";

const protectionHandle = async ({event, resolve}) => {
    if (event.url.pathname.startsWith('/admin/manage')) {
        const session = await event.locals.auth();
        if (!session || session.user.email !== EMAIL) {
            throw redirect(303, '/admin');
        }
    }

    return resolve(event);
}

export const handle = sequence(authHandle, protectionHandle)