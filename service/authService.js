import $api from "@/composables/httpFetch";

export default class AuthService {
	static async login(login, password) {
		return $api()("auth/login", {
			method: "POST",
			body: {
				email: login,
				password: password,
			},
		});
	}

	static async register(login, password, password_confirmation, name, role) {
		return $api()("auth/register", {
			method: "POST",
			body: {
				email: login,
				password: password,
				password_confirmation: password_confirmation,
				name: name,
				role: role,
			},
		});
	}

	static async refresh() {
		return $api()("auth/refresh", {
			method: "POST",
		});
	}

	static async userProfile() {
		return $api()("auth/user-profile", {
			method: "GET",
		});
	}

	static async logout() {
		return $api()("auth/logout", {
			method: "POST",
		});
	}

	static async getUsers(name) {
		return $api()("action/get_users", {
			method: "POST",
		});
	}

	static async editUser(obj) {
		return $api()("action/edit_user", {
			method: "POST",
			body: {
				...obj,
			},
		});
	}
}
