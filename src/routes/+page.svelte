<script>
	export let data;
</script>

<svelte:head>
	<title>Home | FitSource</title>
</svelte:head>

<main>
	<div
		class="hero h-screen overflow-hidden"
		style="background-image: url(Arendelle.jpg);"
	>
		<div class="hero-overlay bg-opacity-40" />
		<div class="hero-content text-center text-neutral-content">
			<div class="">
				<h1 class="mb-5 text-5xl font-bold drop-shadow-2xl">
					Welcome to FitSource
				</h1>
				<p class="mb-5 text-2xl drop-shadow-xl">
					Your one stop site for all fitness needs!
				</p>
				{#if !data.user}
					<p class="text-center my-2 drop-shadow-2xl">
						Please
						<a
							href="/login"
							class="text-primary font-medium hover:cursor-pointer hover:underline"
							>Login</a
						>
						or
						<a
							href="/register"
							class="text-primary font-medium hover:cursor-pointer hover:underline"
							>Register</a
						> to continue.
					</p>
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-secondary">Register</a>
				{:else}
					<p class="text-center my-2 text-4xl drop-shadow-2xl">
						Continue to
						<a
							href="/browse"
							class="text-primary font-medium hover:cursor-pointer hover:underline"
							>Browse</a
						> to browse resources!
					</p>{/if}
			</div>
		</div>
	</div>
</main>
