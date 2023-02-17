import { defineStore } from "pinia";
import axios from "axios";

export const usersStore = defineStore("users", {
	state: () => {
		return {
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

		async login() {
			const instance = axios.create({
				withCredentials: true,
			});

			const response = await instance.post(`http:/api.wesma.ru/api/auth/`, {
				email: "test3@mail.ru",
				password: "12345678",
			});

			console.log(response);

			return response;
		},
	},
});
