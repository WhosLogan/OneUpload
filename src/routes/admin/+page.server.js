import {redirect} from "@sveltejs/kit";
import {EMAIL} from "$env/static/private";

export const load = async ({locals}) => {
    const session = await locals.auth();
    if (session && session.user.email === EMAIL) {
        redirect(302, '/admin/manage');
    }
}