import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { SECRET_POCKETBASE_URL } from '$env/static/private'

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(SECRET_POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
