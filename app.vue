<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
import { usersStore } from "@/stores/userStore";
const store = usersStore();
if (useCookie("tokenAccess").value != undefined) {
	await store.getUserProfile();
	// await $fetch("http://api.wesma.local/api/auth/refresh", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		authorization: `Bearer ${useCookie("tokenAccess").value}`,
	// 		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
	// 	},
	// })
	// 	.then((data) => {
	// 		store.userProfile = data;
	// 		console.log(data);
	// 	})
	// 	.catch((e) => {
	// 		console.log(e);
	// 	});
}
</script>
