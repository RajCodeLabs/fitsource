import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';


export const load = async (event) => {
	const gym_id = event.params.gym_id;
	let reviewed = false;
	let userRating = null;
	let userReview = ""
	try {
		let result = await event.locals.pb.collection('gyms').getOne(gym_id, { expand: "gym_reviews(gym).user" })
		result.total_reviews = 0;
		result.average_rating = 0;
		if ((Object.keys(result.expand).length) != 0) {
			result.expand["gym_reviews(gym)"].forEach(review => {
				if (!reviewed) {
					if (review.expand.user.id == event.locals.user.id) {
						reviewed = true;
						userRating = parseInt(review.rating);
						userReview = review.review;
					}

				}
				result.total_reviews += 1;
				result.average_rating += review.rating;
			})
			result.average_rating = (result.total_reviews != 0) ? parseFloat((result.average_rating / result.total_reviews).toFixed(2)) : 0;

		}
		return {
			id: result.id,
			name: result.name,
			contact: result.contact,
			image_url: result.image_url,
			description: result.description,
			address: result.address,
			plans: serializeNonPOJOs(result.plans),
			total_reviews: result.total_reviews,
			average_rating: result.average_rating,
			reviewed: reviewed,
			userRating: userRating,
			userReview: userReview,
			reviews: serializeNonPOJOs(result.expand["gym_reviews(gym)"]),

		}
	}
	catch (error) {
		console.error('Error : ', error);
	}
}

export const actions = {
	handleReview: async (event) => {
		const body = Object.fromEntries(await event.request.formData());
		const rating = parseFloat(body.rating).toFixed(1)
		const review_text = body.review
		const updateData = {
			"gym": event.params.gym_id,
			"user": event.locals.user.id,
			"review": review_text,
			"rating": rating
		}
		if ((rating >= 1) && (rating <= 5) && (review_text.length >= 1)) {
			try {
				const res = await event.locals.pb.collection('gym_reviews').getFullList(200, { filter: `user = "${event.locals.user.id}" && gym = "${event.params.gym_id}"` }) || null
				if (res.length > 0) {
					await event.locals.pb.collection("gym_reviews").update(res[0].id, updateData)
				} else {
					await event.locals.pb.collection("gym_reviews").create(updateData);
				}
			} catch (err) {
				console.error("Error Finding reviews : ", err)
			}
		}
		const redirectTo = event.url.searchParams.get("redirectTo") || null
		if (redirectTo) {
			throw redirect(302, `/${redirectTo.slice(1)}`)
		}
	},
	deleteReview: async (event) => {
		try {
			const res = await event.locals.pb.collection('gym_reviews').getFullList(5, { filter: `user = "${event.locals.user.id}" && gym = "${event.params.gym_id}"` }) || null
			if (res.length > 0) {
				await event.locals.pb.collection("gym_reviews").delete(res[0].id)
			}
		} catch (err) {
			console.error("Error : ", err)
		}
		const redirectTo = event.url.searchParams.get("redirectTo") || null
		if (redirectTo) {
			throw redirect(302, `/${redirectTo.slice(1)}`)
		}
	}
}