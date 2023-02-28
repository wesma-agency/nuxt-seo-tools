import { usersStore } from "@/stores/userStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
	const store = usersStore();
	if (useCookie("tokenAccess").value != undefined) {
		await store.getUserProfile();
	}
	if (!store.isAuth && to.name != "auth") {
		return navigateTo("/auth");
	}
	if (store.isAuth && to.name == "auth") {
		return navigateTo("/parsers");
	}

	// if (useCookie("tokenAccess").value == undefined && to.name != "auth") {
	// 	return navigateTo("/auth");
	// }
	// if (useCookie("tokenAccess").value != undefined && to.name == "auth") {
	// 	return navigateTo("/parsers");
	// }
});
