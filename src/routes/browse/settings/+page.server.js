import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';


export const load = async (event) => {
	try {
		const user = await event.locals.pb.collection('users').getOne(event.locals.user.id);
		return serializeNonPOJOs(user);
	}
	catch (error) {
		console.error('Error : ', error);
	}

};
export const actions = {
	updateUserData: async (event) => {
		const body = Object.fromEntries(await event.request.formData());
		if ((body.name) && (body.email)) {
			const data = {
				name: body.name,
				email: body.email
			}
			try {
				const record = await event.locals.pb.collection('users').update(event.locals.user.id, data)
				event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
			} catch (error) {
				console.error("Error : ", error)
			}
		}
	},
	changeUserPassword: async (event) => {
		const body = Object.fromEntries(await event.request.formData());
		if ((body.currentPassword) && (body.newPassword) && (body.newPasswordConfirm)) {
			const data = {
				oldPassword: body.currentPassword,
				password: body.newPassword,
				passwordConfirm: body.newPasswordConfirm
			}
			try {
				const record = await event.locals.pb.collection('users').update(event.locals.user.id, data)
				event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
			} catch (error) {
				console.error("Error : ", error)
			}
		}
	},
}

