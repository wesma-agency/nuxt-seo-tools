import { defineStore } from "pinia";
import AuthService from "@/service/authService";

export const usersStore = defineStore("users", {
	state: () => {
		return {
			userProfile: null,
			isAuth: false,
			expiresIn: null,
			intervalRefresh: null,
			users: null,
			roles: [
				{
					id: 1,
					name: "SEO",
				},
				{
					id: 2,
					name: "DEVELOPER",
				},
				{
					id: 3,
					name: "MANAGER",
				},
			],
		};
	},

	actions: {
		async login(login, password) {
			try {
				const response = await AuthService.login(login, password);
				const cookieToken = useCookie("tokenAccess", {
					maxAge: response.expires_in,
				});
				cookieToken.value = response.access_token;
				this.userProfile = response.user;
				this.isAuth = true;
				this.expiresIn = response.expires_in;
				this.handlerIntervalRefresh();
				return response;
			} catch (e) {
				console.log(e);
			}
		},

		async register(login, password, password_confirmation, name, role) {
			try {
				const response = await AuthService.register(login, password, password_confirmation, name, role);
				const cookieToken = useCookie("tokenAccess", {
					maxAge: response.expires_in,
				});
				cookieToken.value = response.access_token;
				this.userProfile = response.user;
				this.isAuth = true;
				this.expiresIn = response.expires_in;
				this.handlerIntervalRefresh();
				return response;
			} catch (e) {
				console.log(e);
			}
		},

		async addUser(login, password, password_confirmation, name, role) {
			console.log(this.users);
			try {
				const response = await AuthService.addUser(login, password, password_confirmation, name, role);
				this.users[response.data.id] = response.data;
				return response;
			} catch (e) {
				console.log(e);
			}
		},

		async logout() {
			try {
				const response = await AuthService.logout();
				const cookieToken = useCookie("tokenAccess");
				cookieToken.value = null;
				this.userProfile = null;
				this.isAuth = false;
				this.expiresIn = null;
				clearInterval(this.intervalRefresh);
				return response;
			} catch (e) {
				console.log(e);
			}
		},

		async getUserProfile() {
			try {
				const response = await AuthService.userProfile();
				this.userProfile = response;
				this.isAuth = true;
				return response;
			} catch (e) {
				console.log(e);
			}
		},

		async refresh() {
			try {
				const cookieToken = useCookie("tokenAccess");
				if (cookieToken.value) {
					const response = await AuthService.refresh();
					const cookieToken = useCookie("tokenAccess", {
						maxAge: response.expires_in,
					});
					cookieToken.value = response.access_token;
					this.userProfile = response.user;
					this.isAuth = true;
					this.expiresIn = response.expires_in;
				} else {
					return false;
				}
			} catch (e) {
				const cookieToken = useCookie("tokenAccess");
				if (cookieToken.value != undefined) {
					cookieToken.value = null;
				}
				console.log(e);
			}
		},

		async getUsers(id) {
			try {
				const response = await AuthService.getUsers(id);
				if (id && id.length > 0) {
					Object.values(response.data).forEach((element) => {
						this.users[element.id] = element;
					});
					return response;
				} else {
					this.users = response.data;
					return response;
				}
			} catch (e) {
				console.log(e);
			}
		},

		async editUser(obj) {
			try {
				const response = await AuthService.editUser(obj);
				this.getUsers([obj.id]);
			} catch (e) {
				return e;
			}
		},

		handlerIntervalRefresh() {
			this.intervalRefresh = setInterval(this.refresh, (this.expiresIn / 2) * 1000);
		},

		async deleteUser(id) {
			try {
				const response = await AuthService.deleteUser(id);
				delete this.users[id];
				return response;
			} catch (e) {
				console.log(e);
			}
		}
	},
});
