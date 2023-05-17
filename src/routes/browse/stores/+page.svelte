<script>
	export let data = "";
	let str = "";
	$: filteredlist =
		str == ""
			? data?.resourcelist
			: data.resourcelist.filter((store) => {
					return store.name.toLowerCase().includes(str.toLowerCase());
			  });
</script>

<svelte:head>
	<title>Stores | FitSource</title>
</svelte:head>

<main>
	<h1 class="text-5xl text-center py-4 font-extrabold align-center">
		Stores
	</h1>

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
		{#each filteredlist as store}
			<div
				class="card md:card-side card-bordered bg-base-100 drop-shadow my-2 mx-2 shadow-xl"
			>
				<a href="/browse/stores/{store.id}">
					<figure>
						<img
							class="shadow rounded-lg w-96 max-w-sm align-middle border-none"
							src={store.image_url}
							alt={store.name}
						/>
					</figure>
				</a>
				<div class="card-body">
					<a href="/browse/stores/{store.id}">
						<h2 class="card-title underline hover:no-underline">
							{store.name}
						</h2>
					</a>
					<p class="line-clamp-2">{store.description}</p>
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
						<span class="mx-1 text-sm line-clamp-1"
							>{store.address}</span
						>
					</div>
					<p class="line-clamp-1 capitalize font-semibold">
						{store.type} Store
					</p>
					<div>
						<div class="flex items-start">
							{#if store.total_reviews != 0}
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
									>{store.average_rating} •</span
								>
							{/if}
							<a
								href="/browse/stores/{store.id}#reviews"
								class="text-sm font-medium underline hover:no-underline"
							>
								{store.total_reviews} Reviews</a
							>
						</div>
					</div>
					<div class="card-actions justify-end">
						<a
							class="btn btn-primary btn-sm md:btn-md hover:scale-95"
							href="/browse/stores/{store.id}"
						>
							View Details
						</a>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<p class="text-4xl text-center my-3 font-bold align-center">
			No stores found!
		</p>
	{/if}
</main>
