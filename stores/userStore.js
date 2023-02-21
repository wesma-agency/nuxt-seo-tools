import { defineStore } from "pinia";
import AuthService from "@/service/authService";

export const usersStore = defineStore("users", {
	state: () => {
		return {
			userProfile: null,
			isAuth: false,
			users: [
				{
					id: 1,
					login: "test",
					pass: "test",
					role: "seo",
					status: true,
				},

				{
					id: 2,
					login: "test 2",
					pass: "test",
					role: "seo",
					status: true,
				},

				{
					id: 3,
					login: "test 3",
					pass: "test",
					role: "seo",
					status: true,
				},

				{
					id: 4,
					login: "test 4",
					pass: "test",
					role: "seo",
					status: false,
				},
			],
		};
	},

	actions: {
		addUser(props) {
			this.users.push({
				id: this.users.length + 1,
				login: props.login,
				pass: props.pass,
				role: props.role,
				status: false,
			});
		},

		async login(login, password) {
			try {
				const response = await AuthService.login(login, password);
				localStorage.setItem("tokenAccess", response.data.access_token);
				this.userProfile = response.data.user;
				this.isAuth = false;

				return response;
			} catch (e) {
				console.log(e);
			}
		},

		async register(login, password, password_confirmation, name) {
			const response = await AuthService.register(login, password, password_confirmation, name);
			localStorage.setItem("tokenAccess", response.data.access_token);
			this.userProfile = response.data.user;
			this.isAuth = false;

			return response;
		},

		async userProfile() {
			try {
				const response = await AuthService.userProfile();
				this.userProfile = response.data.user;
				this.isAuth = false;
				return response;
			} catch (e) {
				console.log(e);
			}
		},
	},
});
