<script>
	import { page } from "$app/stores";
	const navigation = [
		{
			title: "Browse",
			href: "/browse",
		},
		{
			title: "Gyms",
			href: "/browse/gyms",
		},
		{
			title: "Stores",
			href: "/browse/stores",
		},
		{
			title: "Services",
			href: "/browse/services",
		},
		{
			title: "My Reviews",
			href: "/browse/reviews",
		},
		{
			title: "Account Settings",
			href: "/browse/settings",
		},
	];
	function getPath(url) {
		const gym_regex = /\/browse\/gyms.*/;
		const service_regex = /\/browse\/services.*/;
		const store_regex = /\/browse\/stores.*/;
		const account_regex = /\/browse\/settings.*/;
		const reviews_regex = /\/browse\/reviews.*/;
		if (gym_regex.test(url)) return "Gyms";
		else if (store_regex.test(url)) return "Stores";
		else if (service_regex.test(url)) return "Services";
		else if (account_regex.test(url)) return "Account Settings";
		else if (reviews_regex.test(url)) return "My Reviews";
		else return "Browse";
	}
</script>

<main>
	<div class="flex w-full h-full space-x-4">
		<aside class="h-full sticky left-0 top-20 border-r-2">
			<ul class="menu bg-base-100 w-32 md:w-48 p-2 rounded-box">
				{#each navigation as navItem}
					<li>
						<a
							href={navItem.href}
							class="font-medium {getPath($page.url.pathname) ===
							navItem.title
								? 'active'
								: ''}">{navItem.title}</a
						>
					</li>
				{/each}
			</ul>
		</aside>

		<div class="w-full overflow-y-auto">
			<slot />
		</div>
	</div>
</main>
