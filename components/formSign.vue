<template>
	<form class="mt-8 space-y-6" action="#" method="POST">
		<input type="hidden" name="remember" value="true" />
		<div class="-space-y-px rounded-md shadow-sm">
			<div>
				<label for="email-address" class="sr-only">Логин</label>
				<input id="email-address" name="email" type="text" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Логин" />
			</div>
			<div>
				<label for="password" class="sr-only">Пароль</label>
				<input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Пароль" />
			</div>
		</div>

		<div>
			<button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
				<span class="absolute inset-y-0 left-0 flex items-center pl-3">
					<LockClosedIcon class="h-5 w-5 text-white-700 group-hover:text-white-600" aria-hidden="true" />
				</span>
				Войти
			</button>
		</div>
	</form>
</template>

<script>
import { LockClosedIcon } from "@heroicons/vue/20/solid/index";
import { usersStore } from "@/stores/userStore";

export default {
	components: {
		LockClosedIcon,
	},

	setup(props ,context) {
		const store = usersStore();

		store.login();
	}
};
</script>
