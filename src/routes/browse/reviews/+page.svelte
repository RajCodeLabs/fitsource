<script>
	export let data;
	$: rating = 1;
	$: review_text = "";
	$: name = "";
	$: url = "";
	function setRating(num, text, rsc_name, rsc_type, rsc_id) {
		rating = num;
		review_text = text;
		name = rsc_name;
		url = `${rsc_type}/${rsc_id}`;
		console.log(url);
	}
</script>

<svelte:head>
	<title>My Reviews | FitSource</title>
</svelte:head>

<main>
	<h1 class="text-5xl text-center py-4 font-extrabold align-center">
		My Reviews
	</h1>
	<p class="text-4xl my-2 font-semibold">Gyms</p>
	<div class="divider w-56 md:w-64 lg:w-full mx-auto" />
	{#if data?.gyms?.length > 0}
		{#each data.gyms as gym}
			<div class="card bg-base-300 border-b shadow-md mx-2 my-2">
				<div class="card-body">
					<div class="flow-root">
						<div class="float-left">
							<a href="browse/gyms/{gym.id}">
								<p class="font-semibold underline">
									{gym.expand.gym.name}
								</p>
							</a>
						</div>
						<p class="float-right">
							{gym.rating}/5
						</p>
					</div>
					<p class="">
						Remarks : {gym.review}
					</p>
					<div class="card-actions justify-end">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<label
							for="my-modal-4"
							class="btn btn-link text-black float-right"
							on:click={setRating(
								gym.rating,
								gym.review,
								gym.expand.gym.name,
								"gyms",
								gym.expand.gym.id
							)}
						>
							<svg
								aria-hidden="true"
								class="w-5 h-5 text-black float-right"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><title>Edit</title><path
									d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z"
									fill-rule="nonzero"
								/></svg
							>
							<br />
							<span
								class="text-sm font-semibold capitalize float-right"
								>Edit</span
							>
						</label>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<h2 class="text-3xl text-center my-3 font-bold align-center">
			You don't have any reviews for gyms!
		</h2>
	{/if}
	<p class="text-4xl my-4 font-semibold">Stores</p>
	<div class="divider w-56 md:w-64 lg:w-full mx-auto" />
	{#if data?.stores?.length > 0}
		{#each data.stores as store}
			<div class="card bg-base-300 border-b shadow-md mx-4 my-2">
				<div class="card-body">
					<div class="flow-root">
						<div class="float-left">
							<a href="browse/gyms/{store.id}">
								<p class="font-semibold underline">
									{store.expand.store.name}
								</p>
							</a>
						</div>
						<p class="float-right">
							{store.rating}/5
						</p>
					</div>
					<p class="">
						Remarks : {store.review}
					</p>
					<div class="card-actions justify-end">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<label
							for="my-modal-4"
							class="btn btn-link text-black float-right"
							on:click={setRating(
								store.rating,
								store.review,
								store.expand.store.name,
								"stores",
								store.expand.store.id
							)}
						>
							<svg
								aria-hidden="true"
								class="w-5 h-5 text-black float-right"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><title>Edit</title><path
									d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z"
									fill-rule="nonzero"
								/></svg
							>
							<br />
							<span
								class="text-sm font-semibold capitalize float-right"
								>Edit</span
							>
						</label>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<h2 class="text-3xl text-center my-3 font-bold align-center">
			You don't have any reviews for stores!
		</h2>
	{/if}
	<p class="text-4xl my-4 font-semibold">Services</p>
	<div class="divider w-56 md:w-64 lg:w-full mx-auto" />
	{#if data?.services?.length > 0}
		{#each data.services as service}
			<div class="card bg-base-300 border-b shadow-md mx-4 my-2">
				<div class="card-body">
					<div class="flow-root">
						<div class="float-left">
							<a href="browse/gyms/{service.id}">
								<p class="font-semibold underline">
									{service.expand.service.name}
								</p>
							</a>
						</div>
						<p class="float-right">
							{service.rating}/5
						</p>
					</div>
					<p class="">
						Remarks : {service.review}
					</p>
					<div class="card-actions justify-end">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<label
							for="my-modal-4"
							class="btn btn-link text-black float-right"
							on:click={setRating(
								service.rating,
								service.review,
								service.expand.service.name,
								"services",
								service.expand.service.id
							)}
						>
							<svg
								aria-hidden="true"
								class="w-5 h-5 text-black float-right"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><title>Edit</title><path
									d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z"
									fill-rule="nonzero"
								/></svg
							>
							<br />
							<span
								class="text-sm font-semibold capitalize float-right"
								>Edit</span
							>
						</label>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<h2 class="text-3xl text-center my-3 font-bold align-center">
			You don't have any reviews for services!
		</h2>
	{/if}
	<input type="checkbox" id="my-modal-4" class="modal-toggle" />
	<label for="my-modal-4" class="modal cursor-pointer">
		<label class="modal-box relative" for="">
			<form method="post" action="?/handleReview">
				<h3 class="text-2xl font-bold text-center">Edit Review</h3>
				<p class="text-xl font-semibold">{name}</p>
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
					placeholder="Review Description"
					bind:value={review_text}
					required
				/>
				<div class="grid grid-cols-1 gap-2 content-center mt-4">
					<button
						formaction="{url}?/handleReview&redirectTo=/browse/reviews"
						class="btn btn-primary">Submit</button
					>
					<button
						formaction="{url}?/deleteReview&redirectTo=/browse/reviews"
						class="btn btn-error">Delete</button
					>
				</div>
			</form>
		</label>
	</label>
</main>
