import $api from "@/composables/httpFetch";

export default class AuthService {
	static async getYandexPosition(domain, keys,region) {
		return $api()("service/yandex-position", {
			method: "POST",
			body: {
                domain: domain,
                keys: keys,
                region: region
			},
		});
	}

	static async getTopAnalysis(keys, region, method) {
		return $api()("service/top-analysis", {
			method: "POST",
			body: {
                keys: keys,
                region: region,
				method: method
			},
		});
	}
}
