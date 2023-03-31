import { usersStore } from "@/stores/userStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
	const store = usersStore();
	if (useCookie("tokenAccess").value != undefined && store.userProfile == null) {
		await store.getUserProfile();
	}
	if (!store.isAuth && to.name != "auth") {
		return navigateTo("/auth");
	}

	if (store.isAuth) {
		if (!store.userProfile.active) {
			if (to.name != "waitingActivation") {
				return navigateTo("/waitingActivation");
			}
		} else {
			if (to.name == "auth" || to.name == "waitingActivation") {
				return navigateTo("/parsers");
			}
		}
	}
});
