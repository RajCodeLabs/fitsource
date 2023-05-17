import { error, redirect, json } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals, url }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			if (!body.email || !body.password)
				return {
					error: 'Email and/or password cannot be empty!'
				}
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			const redirectTo = url.searchParams.get("redirectTo")
			if (redirectTo) {
				throw redirect(302, `/${redirectTo.slice(1)}`)
			}
		} catch (err) {
			console.error('Error : ', err);
			return {
				error: err.data.message
			}
		}
		throw redirect(302, '/browse')
	}
};
