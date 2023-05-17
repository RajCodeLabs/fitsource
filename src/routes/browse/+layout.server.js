import { redirect } from '@sveltejs/kit';
import { handleLoginRedirect } from "$lib/utils";

export const load = async (event) => {
	if (!event.locals.pb.authStore.isValid) {
		throw redirect(302, handleLoginRedirect(event))
	}
};
