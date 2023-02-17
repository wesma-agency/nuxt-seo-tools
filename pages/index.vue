<template>
	<div>
		<section class="page-setting py-11 px-6">
			<div class="container m-auto">
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Управление пользователями</h2>

				<div class="flex gap-8">
					<div class="p-8 basis-2/4 rounded-3xl bg-white shadow-[0px_0px_20px_#d9dcec]">
						<h3 class="mb-6 text-2xl font-bold tracking-tight text-gray-900">Список пользователей</h3>
						<div class="flex flex-col">
							<div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
								<div class="inline-block min-w-full">
									<div class="overflow-hidden">
										<table class="min-w-full">
											<thead class="bg-gray-200 border-b">
												<tr>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">id</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Логин</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Пароль</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Роль</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Редактировать</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Удалить</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Активность</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="user in store.users" :key="user.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
													<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.id }}</td>
													<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ user.login }}</td>
													<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ user.pass }}</td>
													<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
													<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">edits</td>
													<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">delete</td>
													<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
														<div class="flex items-center justify-center">
															<input :checked="user.status" type="checkbox" class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:mt-0.5 before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5" />
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="p-8 basis-2/4 rounded-3xl bg-white shadow-[0px_0px_20px_#d9dcec]">
						<h3 class="mb-6 text-2xl font-bold tracking-tight text-gray-900">Добавить нового пользователя</h3>

						<FormRegister v-on:on-submit-register="onSubmitRegister"> Добавить пользователя </FormRegister>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import FormRegister from "@/components/formRegister";
import { usersStore } from "@/stores/userStore";

export default {
	setup(props, context) {
		const store = usersStore();

		function onSubmitRegister(prop) {
			store.addUser(prop);
		}

		return {
			store,
			onSubmitRegister,
		};
	},
};
</script>
