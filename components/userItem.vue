<template>
	<tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" :class="[isEdits ? 'bg-gray-100' : '']">
		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
			<span>{{ userdata.id }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<input v-if="isEdits" type="text" v-model="newUserData.email" :class="[err.email ? 'border-red-600 border' : '']" />
			<span v-else>{{ userdata.email }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<input v-if="isEdits" type="text" v-model="newUserData.name" :class="[err.name ? 'border-red-600 border' : '']" />
			<span v-else>{{ userdata.name }}</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<input v-if="isEdits" type="password" v-model="newUserData.password" :class="[err.password ? 'border-red-600 border' : '']" />
			<span v-else>*******</span>
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			<Select :class="'w-40'" v-if="isEdits" :selectdata="roles" :selectedDefault="newUserData.role" v-on:update:modelValue="(value) => (newUserData.role = value.name)" :islabel="false"></Select>
			<span class="w-40" v-else>{{ userdata.role }}</span>
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
				<div class="cursor-pointer" v-on:click="deleteUser(userdata.id)">
					<img src="@/assets/img/icon-delete-stage.svg" alt="" />
				</div>
			</div>
		</td>
	</tr>
</template>

<script setup>
import Select from "@/components/ui/select.vue";
import { usersStore } from "@/stores/userStore";
import UserDto from "@/dto/userDto";

const props = defineProps({
	userdata: Object,
});

const store = usersStore();

const roles = JSON.parse(useRuntimeConfig().ROLES);

const isEdits = ref(false);

const err = reactive({});

function dataTransfer(objUserData, objNewUserData) {
	let obgTranser = {
		id: objNewUserData.id,
	};

	Object.entries(objNewUserData).forEach(([key, value]) => {
		if (key != "id" && key != "password" && key != "active") {
			objUserData[key] != value ? (obgTranser[key] = value) : null;
		}

		if (key == "password" && value.length > 0) {
			obgTranser[key] = value;
		}

		if (key == "active") {
			objUserData[key] != value ? (obgTranser[key] = value == false ? 0 : 1) : null;
		}
	});

	if (Object.keys(obgTranser).length > 1) {
		return obgTranser;
	} else {
		return false;
	}
}

let newUserData;

async function editsUser() {
	if (isEdits.value == false) {
		isEdits.value = true;
		newUserData = reactive({ ...new UserDto(props.userdata) });
	} else {
		const userTransfer = dataTransfer(props.userdata, newUserData);
		if (userTransfer != false) {
			const res = await store.editUser(userTransfer);
			if (res) {
				Object.entries(res).forEach(([key, value]) => {
					err[key] = value;
				});
				console.log(err);
			} else {
				isEdits.value = false;
			}
		} else {
			isEdits.value = false;
		}
	}
}

async function deleteUser(id) {
	store.deleteUser(id)
}
</script>
