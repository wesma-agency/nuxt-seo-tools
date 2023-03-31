export default function () {
	const $api = $fetch.create({
		baseURL: useRuntimeConfig().API_BASE_URL,
		onRequest({ request, options }) {
			if (request != "auth/register") {
				options.headers = options.headers || {};
				options.headers.authorization = `Bearer ${useCookie("tokenAccess").value}`;
			}
		},

		onResponse({ request, response, options }) {
			if (response.status != 200) {
				throw response._data.error;
			} else {
				return response._data;
			}
		},
	});

	return $api;
}
