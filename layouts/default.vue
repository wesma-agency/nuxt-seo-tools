<template>
	<div class="wrapper min-h-screen flex flex-col">
		<!-- <header class="py-4 border-b border-gray-300">
			<div class="container m-auto">
				<div class="flex justify-between">
					<div>
						<img class="mx-auto h-12 w-auto" src="@/assets/img/logo-wesma.svg" alt="logo" />
					</div>

					<div class="flex gap-8 items-center">
						<a href="#" class="w-48 group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Парсеры</a>

						<a href="#" class="w-48 group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Выйти</a>
					</div>
				</div>
			</div>
		</header> -->

		<div class="flex grow">
			<div class="bg-slate-100 w-72 antialiased text-slate-800 selection:bg-blue-600 selection:text-white">
				<div class="flex flex-col relative h-full">
					<div id="menu" class="bg-gray-main z-10 text-slate-300 h-full min-h-screen">
						<div id="logo" class="my-4 px-6">
							<img class="h-6 w-auto mb-2.5" src="@/assets/img/logo-wesma.svg" alt="logo" />
							<p class="text-slate-500 text-sm">Digital-агентство полного цикла</p>
						</div>
						<div id="profile" class="px-6 py-10">
							<p class="text-slate-500 mb-2.5">Вы вошли как:</p>
							<div class="inline-flex space-x-2 items-center">
								<span>
									<img class="w-8 h-8" src="@/assets/img/icon-w.svg" alt="" />
								</span>
								<span class="text-sm text-slate-500 md:text-base font-bold"> Администратор </span>
							</div>
						</div>
						<div id="nav" class="w-full px-6">
							<NuxtLink to="/parsers" custom v-slot="{ href, navigate, isActive }">
								<a :href="href" @click="navigate" :class="[isActive ? currentMenuClass : allMenuClass]" class="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
											<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
										</svg>
									</div>
									<div class="flex flex-col">
										<span class="text-lg font-bold leading-5 text-inherit">Парсеры</span>
										<span class="text-sm hidden md:block text-inherit">Список парсеров</span>
									</div>
								</a>
							</NuxtLink>

							<NuxtLink to="/log" custom v-slot="{ href, navigate, isActive }">
								<a :href="href" @click="navigate" :class="[isActive ? currentMenuClass : allMenuClass]" class="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
											<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
										</svg>
									</div>
									<div class="flex flex-col">
										<span class="text-lg font-bold leading-5 text-inherit">Логи</span>
										<span class="text-sm hidden md:block text-inherit">Логи действий</span>
									</div>
								</a>
							</NuxtLink>

							<NuxtLink to="/" custom v-slot="{ href, navigate, isActive }">
								<a :href="href" @click="navigate" :class="[isActive ? currentMenuClass : allMenuClass]" class="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
											<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
										</svg>
									</div>
									<div class="flex flex-col">
										<span class="text-lg font-bold leading-5 text-inherit">Настройки</span>
										<span class="text-sm hidden md:block text-inherit">Редактор пользователей</span>
									</div>
								</a>
							</NuxtLink>

							<button v-on:click="logout" :class="allMenuClass" class="text-left w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150">
								<div>
									<svg class="w-6 h-6" fill="none" viewBox="0 0 20 20" stroke-width="1" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
								</div>
								<div class="flex flex-col">
									<span class="text-lg font-bold leading-5 text-inherit">Выйти</span>
									<span class="text-sm hidden md:block text-inherit">Выйти из системы</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="grow">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
import { usersStore } from "@/stores/userStore";

const store = usersStore();
const router = useRouter();

let currentMenuClass = computed(() => {
	return "text-white-500 bg-green-600 hover:bg-green-600";
});

let allMenuClass = computed(() => {
	return "text-slate-500 hover:bg-green-600/5";
});

async function logout() {
	await store.logout();
	router.push({ path: "/auth" });
}
</script>
