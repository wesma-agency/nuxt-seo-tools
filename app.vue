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

onMounted(async () => {
	if (useCookie("tokenAccess").value != undefined) {
		await store.refresh();
	}
});
</script>
