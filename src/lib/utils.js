import { pbkdf2 } from 'node:crypto';
import { esbuildVersion } from 'vite';

const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export function handleLoginRedirect(
	event,
	message = "You must be logged in to access the page"
) {
	const redirectTo = event.url.pathname + event.url.search
	return `/login?redirectTo=${redirectTo}&message=${message}`
}
