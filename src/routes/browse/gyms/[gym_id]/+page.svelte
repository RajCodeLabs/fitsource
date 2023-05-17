<script context="module">
	let pageName = "Loading | FitSource";
</script>

<script>
	export let data;
	let review_text = data.userReview;
	let rating = data.userRating;
	pageName = data?.name ? data.name + " | FitSource" : "Error | FitSource";
	const reviewStr = data.reviewed == true ? "Edit Review" : "Add Review";
</script>

<svelte:head>
	<title>
		{pageName}
	</title>
</svelte:head>

<main>
	<div class="hero my-1 md:my-2">
		<div class="hero-content flex-col w-56 md:w-96 lg:w-full">
			<h1 class="text-5xl text-center py-2 font-extrabold">
				{data.name}
			</h1>
			<img
				src={data.image_url}
				class="max-w-sm rounded-lg shadow-2xl"
				alt={data.name}
			/>
			<div class="">
				<div class="py-2">
					<p class="my-2">
						{data.description}
					</p>
					<div class="flex items-start m7-2">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-black"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>Location</title>
							<path
								d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
							/>
						</svg>
						<span class="mx-1 text-sm line-clamp-1"
							>{data.address}</span
						>
					</div>
					<div class="flex items-start my-2">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-black"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>Phone Number</title>
							<path
								d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"
							/>
						</svg>
						<span class="mx-1 text-sm underline line-clamp-1"
							><a href="tel:{data.contact}">
								{data.contact}
							</a>
						</span>
					</div>
					<p class="mt-2">
						<b>Average Rating : </b>{data.average_rating
							? `${data.average_rating}/5`
							: "Not Available"}
					</p>
				</div>
				<div>
					<div class="divider" />
					<p class="text-4xl my-2">Plans</p>
					<div
						class="card card-compact md:card-normal bg-base-300 border-b shadow-md my-2"
					>
						<div class="card-body">
							<div class="flow-root">
								<div class="float-left">3 Months</div>
								<div class="float-right">
									₹{data.plans["3 month"]}/-
								</div>
								<br />
								<div class="float-left">6 Months</div>
								<div class="float-right">
									₹{data.plans["6 month"]}/-
								</div>
								<br />
								<div class="float-left">12 Months</div>
								<div class="float-right">
									₹{data.plans["12 month"]}/-
								</div>
								<br />
							</div>
						</div>
					</div>
				</div>
				<div class="divider" id="reviews" />
				<p class="text-4xl my-2">Reviews</p>
				{#if data?.average_rating}
					<div>
						{#each data.reviews as review}
							<div
								class="card card-compact md:card-normal bg-base-300 border-b shadow-md my-2"
							>
								<div class="card-body">
									<div class="flow-root">
										<div class="float-left">
											<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
											<!-- svelte-ignore a11y-label-has-associated-control -->
											<label
												tabindex="0"
												class="btn btn-ghost btn-circle avatar"
											>
												<div class="w-7 rounded-full">
													<img
														src="https://api.dicebear.com/6.x/thumbs/png?seed={review
															.expand.user.id}"
														alt="User avatar"
														class="inline"
													/>
												</div></label
											>
											{review.expand.user.name}
										</div>
										<div class="md:hidden">
											<br />
										</div>
										<p class="float-right mt-2">
											{review.rating}/5
										</p>
									</div>
									<p class="ml-2">
										Remarks : {review.review}
									</p>
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-4xl text-center my-3 font-bold align-center">
						No reviews available yet!
					</p>
				{/if}

				<div class="grid grid-cols-1 gap-4 content-center">
					<label for="my-modal-4" class="btn btn-primary my-2"
						>{reviewStr}</label
					>

					<!-- <button class="btn btn-primary my-2">Contact Gym</button> -->
				</div>
				<input type="checkbox" id="my-modal-4" class="modal-toggle" />
				<label for="my-modal-4" class="modal cursor-pointer">
					<label class="modal-box relative" for="">
						<form method="post" action="?/handleReview">
							<h3 class="text-lg font-bold">{reviewStr}</h3>
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text"> Rating </span>
								<span class="label-text-alt"> Range: 1-5 </span>
							</label>
							<input
								class="input input-bordered w-full"
								type="number"
								id="rating"
								name="rating"
								min="1"
								max="5"
								step="0.1"
								placeholder="1-5"
								bind:value={rating}
								required
							/>
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text"> Review </span>
							</label>
							<textarea
								class="textarea textarea-bordered w-full"
								name="review"
								placeholder="Remarks"
								bind:value={review_text}
								required
							/>
							<div
								class="grid grid-cols-1 gap-2 content-center mt-4"
							>
								<button
									formaction="?/handleReview"
									class="btn btn-primary">Submit</button
								>
								{#if data.reviewed}
									<button
										formaction="?/deleteReview"
										class="btn btn-error">Delete</button
									>
								{/if}
							</div>
						</form>
					</label>
				</label>
			</div>
		</div>
	</div>
</main>
