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
}
</script>
