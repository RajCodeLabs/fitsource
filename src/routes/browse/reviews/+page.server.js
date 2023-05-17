import { serializeNonPOJOs } from '$lib/utils';


export const load = async (event) => {
	const user_id = event.locals.user.id
	try {
		const res = await event.locals.pb.collection('gym_reviews').getFullList(200, { filter: `user = "${user_id}"`, expand: "gym" }) || null
		const res2 = await event.locals.pb.collection('store_reviews').getFullList(200, { filter: `user = "${user_id}"`, expand: "store" }) || null
		const res3 = await event.locals.pb.collection('service_reviews').getFullList(200, { filter: `user = "${user_id}"`, expand: "service" }) || null
		return {
			gyms: serializeNonPOJOs(res),
			stores: serializeNonPOJOs(res2),
			services: serializeNonPOJOs(res3)
		}
	}
	catch (error) {
		console.error('Error : ', error);
	}

}