import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '../../lib/utils';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';


export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
		if (!body.email || !body.password) {

			return {
				error: 'Email and/or password cannot be empty!'
			}
		}
		if (body.password != body.passwordConfirm) {
			return {
				error: 'Password and Confirm Password are different'
			}
		}

		try {
			await locals.pb.collection('users').create({ ...body });
			const avatar = createAvatar(lorelei, {
				seed: "",
			})
			await locals.pb.collection('users').authWithPassword(body.email, body.password);

		} catch (err) {
			console.error('Error : ', err);
			return {
				error: err.data.message
			}
		}
		throw redirect(303, '/browse');

	}
};
