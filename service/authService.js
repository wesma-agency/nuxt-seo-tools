import $api from "@/composables/http";

export default class AuthService {
	static async login(login, password) {
		return $api().post(`auth/login`, {
			email: login,
			password: password,
		});
	}

	static async register(login, password, password_confirmation, name) {
		return $api().post(`auth/register`, {
			email: login,
			password: password,
			password_confirmation: password_confirmation,
			name: name,
		});
	}

	static async refresh() {
		return $api().post(`auth/refresh`);
	}

	static async userProfile() {
		return $api().get(`auth/user-profile`);
	}

	static async logout() {
		return $api().post(`auth/logout`);
	}
}
