<template>
	<div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
		<div class="w-full max-w-md space-y-8">
			<div>
				<img class="mx-auto h-12 w-auto" src="@/assets/img/logo-wesma.svg" alt="Your Company" />
				<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Войдите или создайте аккаунт</h2>

				<div class="mt-6 flex items-center justify-between gap-6">
					<button v-on:click="switchTab('sign')" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Вход</button>

					<button v-on:click="switchTab('register')" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Регистрация</button>
				</div>
			</div>
			<FormSign v-if="activeTab === 'sign'" />
			<FormRegister v-if="activeTab === 'register'" />
		</div>
	</div>
</template>

<script>
import FormSign from "@/components/formSign";
import FormRegister from "@/components/formRegister";

export default {
	data() {
		return {
			activeTab: "sign",
		};
	},

	methods: {
		switchTab(nameTab) {
			this.activeTab = nameTab;
		},
	},
};
</script>
