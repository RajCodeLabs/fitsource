<script>
	import { invalidateAll } from "$app/navigation";
	import { onMount } from "svelte";
	export let data;
	import { goto } from "$app/navigation";

	let email = data.user.email;
	let name = data.user.name;
</script>

<svelte:head>
	<title>Account Settings | FitSource</title>
</svelte:head>

<main>
	<h1 class="text-5xl text-center py-4 font-extrabold align-center">
		Account Settings
	</h1>
	<form
		class="flex flex-col items-center space-y-2 w-full pt-4"
		method="post"
		action="?/updateUserData"
	>
		<h2 class="text-3xl text-center py-4 font-semibold">Update Details</h2>
		<label
			for="userid"
			class="label font-medium pb-1input input-bordered w-full max-w-md"
		/>
		{#key data.user.name}
			<div class="form-control w-full max-w-md">
				<label for="username" class="label font-medium pb-1">
					<span class="label-text">Name</span>
				</label>
				<input
					type="text"
					name="name"
					class="input input-bordered w-full max-w-md"
					bind:value={name}
					required
				/>
			</div>
		{/key}

		<div class="form-control w-full max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				class="input input-bordered w-full max-w-md"
				bind:value={email}
				required
			/>
		</div>

		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">
				Change Details</button
			>
		</div>
	</form>
	<div class="divider mt-8 w-56 md:w-72 lg:w-full mx-auto" />
	<form
		class="flex flex-col items-center w-full"
		method="post"
		action="?/changeUserPassword"
	>
		<h2 class="text-3xl text-center my-2 font-semibold">Change Password</h2>
		<label
			for="userid"
			class="label font-medium pb-1input input-bordered w-full max-w-md"
		/>
		<div class="form-control w-full max-w-md">
			<div class="form-control w-full max-w-md">
				<label for="password" class="label font-medium pb-1">
					<span class="label-text">Current Password</span>
				</label>
				<input
					type="password"
					name="currentPassword"
					minlength="8"
					class="input input-bordered w-full max-w-md"
					placeholder="Current password"
					required
				/>
			</div>

			<div class="form-control w-full max-w-md">
				<div class="form-control w-full max-w-md">
					<label for="password" class="label font-medium pb-1">
						<span class="label-text">New Password</span>
					</label>
					<input
						type="password"
						name="newPassword"
						minlength="8"
						class="input input-bordered w-full max-w-md"
						placeholder="New password"
						required
					/>
				</div>

				<div class="form-control w-full max-w-md">
					<div class="form-control w-full max-w-md">
						<label for="password" class="label font-medium pb-1">
							<span class="label-text">Confirm New Password</span>
						</label>
						<input
							type="password"
							name="newPasswordConfirm"
							minlength="8"
							class="input input-bordered w-full max-w-md"
							placeholder="Confirm New password"
							required
						/>
					</div>

					<div class="w-full max-w-md pt-2">
						<button class="btn btn-error w-full"
							>Change Password</button
						>
					</div>
				</div>
			</div>
		</div>
	</form>
</main>
