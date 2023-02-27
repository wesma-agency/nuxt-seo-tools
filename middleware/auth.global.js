export default defineNuxtRouteMiddleware((to, from) => {
	if (useCookie("tokenAccess").value == undefined && to.name != "auth") {
		return navigateTo("/auth");
	}
	if (useCookie("tokenAccess").value != undefined && to.name == "auth") {
		return navigateTo("/parsers");
	}
});
