<template>
	<div>
		<section class="page-setting py-11 px-6">
			<div class="container m-auto">
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Управление пользователями</h2>

				<div class="flex gap-8 flex-col 2xl:flex-row">
					<div class="p-8 basis-2/4 rounded-3xl bg-white shadow-[0px_0px_20px_#d9dcec]">
						<h3 class="mb-6 text-2xl font-bold tracking-tight text-gray-900">Список пользователей</h3>
						<div class="flex flex-col">
							<div class="sm:mx-0.5 lg:mx-0.5">
								<div class="inline-block min-w-full">
									<div>
										<table class="min-w-full">
											<thead class="bg-gray-200 border-b">
												<tr>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">id</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Имя</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Пароль</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Роль</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Активность</th>
													<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Редактировать</th>
												</tr>
											</thead>
											<tbody>
												<UserItem v-for="user in store.users" :userdata="user" :key="user.id"></UserItem>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="p-8 basis-2/4 rounded-3xl bg-white shadow-[0px_0px_20px_#d9dcec]">
						<h3 class="mb-6 text-2xl font-bold tracking-tight text-gray-900">Добавить нового пользователя</h3>

						<FormRegister v-on:on-submit="onSubmit"> Добавить пользователя </FormRegister>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import UserItem from "@/components/userItem.vue";
import FormRegister from "@/components/formRegister";
import { usersStore } from "@/stores/userStore";

const store = usersStore();

function onSubmit(props) {
	store.addUser(props.email, props.password, props.passwordConfirmation, props.name, props.selected);
}

if (store.users === null) {
	await store.getUsers();
}
</script>
