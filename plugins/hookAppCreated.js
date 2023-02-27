import { usersStore } from "@/stores/userStore";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:finish", async () => {
		const store = usersStore();
		const cookieToken = useCookie("tokenAccess");
		if (cookieToken.value) {
			if (store.intervalRefresh === null) {
				await store.refresh();
				store.handlerIntervalRefresh();
			}
		}
	});
});
