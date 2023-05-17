<script>
</script>

<svelte:head>
	<title>Browse | FitSource</title>
</svelte:head>

<main>
	<h1 class="text-5xl text-center py-4 mb-2 font-extrabold align-center">
		Browse Fitness Resources
	</h1>
	<div class="grid place-items-center">
		<div
			class="card w-44 card-compact md:w-96 bg-primary text-primary-content md:mx-2 my-2 md:card-normal"
		>
			<div class="card-body">
				<h2 class="card-title text-center underline">
					<a href="/browse/gyms"> Gyms </a>
				</h2>
				<p>Browse gyms and fitness parks!</p>
				<div class="card-actions justify-end">
					<a
						href="/browse/gyms"
						class="btn btn-secondary btn-sm md:btn-md mt-2"
						>Browse Gyms</a
					>
				</div>
			</div>
		</div>
		<div
			class="card w-44 card-compact md:w-96 bg-primary text-primary-content md:mx-2 my-2 md:card-normal"
		>
			<div class="card-body">
				<h2 class="card-title text-center underline">
					<a href="/browse/stores"> Stores </a>
				</h2>
				<p>Browse accessory and supplement stores!</p>
				<div class="card-actions justify-end">
					<a
						href="/browse/stores"
						class="btn btn-secondary btn-sm md:btn-md mt-2"
						>Browse Stores</a
					>
				</div>
			</div>
		</div>
		<div
			class="card w-44 card-compact md:w-96 bg-primary text-primary-content md:mx-2 my-2 md:card-normal"
		>
			<div class="card-body">
				<h2 class="card-title text-center underline">
					<a href="/browse/services"> Services </a>
				</h2>
				<p>Browse fitness related services!</p>
				<div class="card-actions justify-end">
					<a
						href="/browse/services"
						class="btn btn-sm md:btn-md btn-secondary mt-2"
						>Browse Services</a
					>
				</div>
			</div>
		</div>
	</div>
</main>
