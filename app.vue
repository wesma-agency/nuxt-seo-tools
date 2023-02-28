<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
if (useCookie("tokenAccess").value != undefined) {
	await $fetch("http://api.wesma.ru/api/auth/refresh", {
		method: "POST",
		headers: {
			authorization: `Bearer ${useCookie("tokenAccess").value}`,
		},
	})
		.then((data) => {
			console.log(data);
		})
		.catch((e) => {
			console.log(e);
		});
}
</script>
