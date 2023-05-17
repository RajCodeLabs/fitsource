<script>
	export let data = "";
	let str = "";
	$: filteredlist =
		str == ""
			? data?.resourcelist
			: data.resourcelist.filter((gym) => {
					return gym.name.toLowerCase().includes(str.toLowerCase());
			  });
</script>

<svelte:head>
	<title>Gyms | FitSource</title>
</svelte:head>

<main>
	<h1 class="text-5xl text-center py-4 font-extrabold align-center">Gyms</h1>

	<div class="px-2">
		<input
			class="border-2 w-full my-2 h-10 px-5 rounded-lg focus:outline-none"
			type="search"
			name="search"
			placeholder="Search"
			bind:value={str}
		/>
	</div>

	{#if filteredlist.length != 0}
		{#each filteredlist as gym}
			<div
				class="card md:card-side card-bordered bg-base-100 drop-shadow my-2 mx-2 shadow-xl"
			>
				<a href="/browse/gyms/{gym.id}">
					<figure>
						<img
							class="shadow rounded-lg w-96 max-w-sm align-middle border-solid"
							src={gym.image_url}
							alt={gym.name}
						/>
					</figure>
				</a>
				<div class="card-body">
					<a href="/browse/gyms/{gym.id}">
						<h2 class="card-title underline hover:no-underline">
							{gym.name}
						</h2>
					</a>
					<p class="line-clamp-2">{gym.description}</p>
					<div class="flex items-start">
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
						<span class="mx-1 text-sm lg:text-md line-clamp-1"
							>{gym.address}</span
						>
					</div>
					<div class="flex items-start">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-black"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>Plams</title>
							<path
								d="M22 3v21h-20v-21h4.667l-2.667 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 15h10v1h-10v-1zm0-1h10v-1h-10v1zm0-2h10v-1h-10v1zm0-2h10v-1h-10v1z"
							/>
						</svg>
						<span class="mx-1 text-sm lg:text-md line-clamp-1"
							>12 months : ₹{gym.plans["12 month"]}/-</span
						>
					</div>
					<div>
						<div class="flex items-start">
							{#if gym.total_reviews != 0}
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-yellow-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><title>Rating star</title><path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/></svg
								>
								<span class="mx-1 text-sm font-bold"
									>{gym.average_rating} •</span
								>
							{/if}
							<a
								href="/browse/gyms/{gym.id}#reviews"
								class="text-sm font-medium underline hover:no-underline"
								>{gym.total_reviews} Reviews</a
							>
						</div>
					</div>
					<div class="card-actions justify-end">
						<a
							class="btn btn-primary btn-sm md:btn-md hover:scale-95"
							href="/browse/gyms/{gym.id}"
						>
							View Details
						</a>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<p class="text-4xl text-center my-3 font-bold align-center">
			No gyms found!
		</p>
	{/if}
</main>
