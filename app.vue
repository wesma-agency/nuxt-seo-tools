<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { usersStore } from "@/stores/userStore";
import { mapActions } from "pinia";

export default {
	computed: {
		...mapState(usersStore, ["isAuth"]),
	},

	mounted() {
		if (localStorage.getItem("tokenAccess")) {
			this.userProfile().then((data) => console.log(data));
		}
	},

	methods: {
		...mapActions(usersStore, ["userProfile"]),
	},

	created() {
		// const router = useRouter();
		// router.beforeEach(() => {
		// 	console.log(1);
		// 	if (!this.isAuth) {
		// 		router.push({ path: "/auth" });
		// 	}
		// });
		// console.log(router);
	},
};
</script>
