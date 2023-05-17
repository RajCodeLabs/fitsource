<script>
	export let form;
</script>

<svelte:head>
	<title>Register | FitSource</title>
</svelte:head>

<main>
	<div class="flex flex-col items-center h-full w-full">
		<h2
			class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content"
		>
			Register for an account
		</h2>
		<p class="text-center mt-1">
			Or <a
				href="/login"
				class="text-primary font-medium hover:cursor-pointer hover:underline"
				>sign in</a
			> if you already have an account.
		</p>
		<form
			action="?/register"
			method="POST"
			class="flex flex-col items-center space-y-2 w-full pt-4"
		>
			<div class="form-control w-full max-w-md">
				<label for="email" class="label font-medium pb-1">
					<span class="label-text">Email</span>
				</label>
				<input
					type="email"
					name="email"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="form-control w-full max-w-md">
				<label for="name" class="label font-medium pb-1">
					<span class="label-text">Name</span>
				</label>
				<input
					type="text"
					name="name"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="form-control w-full max-w-md">
				<label for="password" class="label font-medium pb-1">
					<span class="label-text">Password</span>
				</label>
				<input
					type="password"
					name="password"
					minlength="8"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="form-control w-full max-w-md">
				<label for="passwordConfirm" class="label font-medium pb-1">
					<span class="label-text">Confirm Password</span>
				</label>
				<input
					type="password"
					name="passwordConfirm"
					minlength="8"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="w-full max-w-md pt-2">
				<button type="submit" class="btn btn-primary w-full"
					>Register</button
				>
			</div>
		</form>
		{#if form?.error}
			<div class="alert max-w-md alert-error mt-3 shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 flex-shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>Error! {form.error}</span>
				</div>
			</div>
		{/if}
	</div>
</main>
