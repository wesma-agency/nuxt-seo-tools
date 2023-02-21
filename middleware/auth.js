export default defineNuxtRouteMiddleware((to, from) => {
	console.log(to);
	return navigateTo("/auth");
});
