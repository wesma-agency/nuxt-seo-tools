import { usersStore } from "@/stores/userStore";

// export default defineNuxtPlugin((nuxtApp) => {
// 	nuxtApp.hook("app:beforeMount", async () => {
// 		const store = usersStore();
// 		const cookieToken = useCookie("tokenAccess");
// 		if (cookieToken.value) {
// 			if (store.intervalRefresh === null) {
// 				await store.refresh();
// 				store.handlerIntervalRefresh();
// 			}
// 		}
// 	});
// });

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("app:created", async () => {});
});

// export default defineNuxtPlugin((nuxtApp) => {
// 	nuxtApp.hook("app:created", async () => {
// 		await $fetch("http://api.wesma.local/api/auth/refresh", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				authorization: `Bearer ${useCookie("tokenAccess").value}`,
// 				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
// 			},
// 		});
// 	});
// });
