import { serializeNonPOJOs } from '$lib/utils';


export const load = async (event) => {
	try {
		let reviews = []
		let db_result = await event.locals.pb.collection('stores').getList(1, 50, { expand: "store_reviews(store)" });
		let result = db_result.items.map(({ name, image_url, description, address, contact, type, id, expand }) => ({ name, image_url, description, address, contact, type, id, expand }));
		result.forEach(res => {
			res.total_reviews = 0;
			res.average_rating = 0;
			if ((Object.keys(res.expand).length) != 0) {
				res.expand["store_reviews(store)"].forEach(review => {
					res.total_reviews += 1;
					res.average_rating += review.rating;
				})
				result.average_rating = (result.total_reviews != 0) ? parseFloat((result.average_rating / result.total_reviews).toFixed(2)) : 0;
			}
		});
		return {
			resourcelist: serializeNonPOJOs(result),
		}
	}
	catch (error) {
		console.error('Error : ', error);
	}
};