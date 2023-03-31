<template>
	<form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="onSubmit">
		<input type="hidden" name="remember" value="true" />
		<div class="-space-y-px rounded-md shadow-sm">
			<div>
				<input v-model="email" id="email-address" name="email" type="text" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Логин" />
			</div>

			<div>
				<input v-model="name" id="name" name="email" type="text" required="" class="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Имя" />
			</div>

			<div>
				<input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Пароль" />
			</div>

			<div>
				<input v-model="passwordConfirmation" id="passwordConfirmation" name="passwordConfirmation" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Подтверждение пароля" />
			</div>
		</div>

		<div>
			<Select :selectdata="roles" :selectedDefault="selected" v-on:update:modelValue="(value) => (selected = value.name)" :islabel="false"></Select>
		</div>

		<div>
			<button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
				<span class="absolute inset-y-0 left-0 flex items-center pl-3">
					<LockClosedIcon class="h-5 w-5 text-white-700 group-hover:text-white-600" aria-hidden="true" />
				</span>
				<slot> Зарегистрироваться </slot>
			</button>
		</div>
	</form>
</template>

<script setup>
import Select from "@/components/ui/select.vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid/index";

const emit = defineEmits(['onSubmit'])

const email = ref();
const password = ref();
const passwordConfirmation = ref();
const name = ref();

const roles = JSON.parse(useRuntimeConfig().ROLES);

const selected = ref(roles[0].name);

function onSubmit() {
	emit("onSubmit", {
		email: email.value, 
		password: password.value, 
		passwordConfirmation: passwordConfirmation.value, 
		name: name.value, 
		selected: selected.value
	})
}
</script>
