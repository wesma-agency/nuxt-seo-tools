// import { usersStore } from "@/stores/userStore";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("app:rendered", async () => {});
});

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

// export default defineNuxtPlugin((nuxtApp) => {
// 	nuxtApp.hook("app:created", async () => {
// 		await $fetch("http://api.wesma.local/api/auth/refresh", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLndlc21hLmxvY2FsL2FwaS9hdXRoL3JlZnJlc2giLCJpYXQiOjE2Nzc1MDE5MTUsImV4cCI6MTY3NzUwNjIyMiwibmJmIjoxNjc3NTAyNjIyLCJqdGkiOiJwRE1vSnZLWDJBZTQ0MktMIiwic3ViIjoiNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.W73wkEiqC7kQ5R-iVqnrxhzW0pJF3TrPwsJBuCXuEcg",
// 			},
// 		});
// 	});
// });
