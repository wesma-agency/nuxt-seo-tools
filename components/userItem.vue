<template>
	<tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
			<span>{{ userdata.id }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<input v-if="isEdits" type="text" v-model="newUserData.email" />
			<span v-else>{{ userdata.email }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<input v-if="isEdits" type="text" v-model="newUserData.name" />
			<span v-else>{{ userdata.name }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<input v-if="isEdits" type="password" v-model="newUserData.password" />
			<span v-else>*******</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<Select v-if="isEdits" :selectdata="roles" :selectedDefault="newUserData.role" v-on:update:modelValue="(value) => (newUserData.role = value.name)" :islabel="false"></Select>
			<span v-else>{{ userdata.role }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<div class="flex items-center justify-center">
				<input v-if="isEdits" v-model="newUserData.active" type="checkbox" class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:mt-0.5 before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5 cursor-pointer" />
				<input v-else :checked="userdata.active" disabled type="checkbox" class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:mt-0.5 before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5 cursor-pointer" />
			</div>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<div class="flex items-center justify-center gap-4">
				<div class="cursor-pointer" v-on:click="editsUser">
					<img src="@/assets/img/icon-edits.svg" alt="" />
				</div>
				<div class="cursor-pointer">
					<img src="@/assets/img/icon-delete-stage.svg" alt="" />
				</div>
			</div>
		</td>
	</tr>
</template>

<script setup>
import Select from "@/components/ui/select.vue";
import { usersStore } from "@/stores/userStore";

const props = defineProps({
	userdata: Object,
});

const store = usersStore();

const newUserData = reactive({
	id: props.userdata.id,
	email: props.userdata.email,
	name: props.userdata.name,
	password: "",
	role: props.userdata.role,
	active: props.userdata.active == 1 ? true : false,
});

const roles = [
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
];

const isEdits = ref(false);

function editsUser() {
	isEdits.value = !isEdits.value;
	if (isEdits.value == false) {
		store.editUser(newUserData);
	}
}
</script>
