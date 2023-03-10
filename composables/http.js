import axios from "axios";
import AuthService from "@/service/authService";

export default function () {
	const $api = axios.create({
		withCredentials: true,
		baseURL: useRuntimeConfig().API_BASE_URL,
	});

	$api.interceptors.request.use((config) => {
		config.headers.Authorization = `Bearer ${useCookie("tokenAccess").value}`;
		return config;
	});

	// $api.interceptors.response.use(
	// 	(config) => {
	// 		return config;
	// 	},
	// 	async (error) => {
	// 		const originalRequest = error.config;
	// 		if (error.response.status == 401) {
	// 			try {
	// 				const response = await AuthService.refresh();
	// 				const cookieToken = useCookie("tokenAccess");
	// 				cookieToken.value = response.data.access_token;
	// 				return $api.request(originalRequest);
	// 			} catch (e) {
	// 				console.log("Не авторизован");
	// 			}
	// 		}
	// 	}
	// );

	return $api;
}
