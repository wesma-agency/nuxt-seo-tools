<template>
	<form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="onSubmit">
		<input type="hidden" name="remember" value="true" />
		<div class="-space-y-px rounded-md shadow-sm">
			<div>
				<label for="email-address" class="sr-only">Логин</label>
				<input v-model="login" id="email-address" name="email" type="text" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Логин" />
			</div>
			<div>
				<label for="password" class="sr-only">Пароль</label>
				<input v-model="pass" id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" placeholder="Пароль" />
			</div>
		</div>

		<div>
			<Listbox as="div" v-model="select.selected">
				<ListboxLabel class="block text-sm font-medium text-gray-700">Сфера деятельности:</ListboxLabel>
				<div class="relative mt-1">
					<ListboxButton class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm">
						<span class="flex items-center">
							<span class="block truncate">{{ select.selected.name }}</span>
						</span>
						<span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
							<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
						</span>
					</ListboxButton>

					<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
						<ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							<ListboxOption as="template" v-for="person in select.role" :key="person.id" :value="person" v-slot="{ active, selected }">
								<li :class="[active ? 'text-white bg-green-700' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
									<div class="flex items-center">
										<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ person.name }}</span>
									</div>

									<span v-if="selected" :class="[active ? 'text-white' : 'text-green-700', 'absolute inset-y-0 right-0 flex items-center pr-4']">
										<CheckIcon class="h-5 w-5" aria-hidden="true" />
									</span>
								</li>
							</ListboxOption>
						</ListboxOptions>
					</transition>
				</div>
			</Listbox>
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

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, LockClosedIcon } from "@heroicons/vue/20/solid/index";

export default {
	data() {
		return {
			login: null,
			pass: null,
			select: {
				role: [
					{
						id: 1,
						name: "Seo",
					},
					{
						id: 2,
						name: "Developer",
					},
					{
						id: 3,
						name: "Manager",
					},
				],

				selected: null,
			},
		};
	},

	created() {
		this.select.selected = this.select.role[0];
	},

	methods: {
		onSubmit() {
			this.$emit("onSubmitRegister", {
				login: this.login,
				pass: this.pass,
				role: this.select.selected.name,
			});
		},
	},

	components: {
		LockClosedIcon,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		CheckIcon,
		ChevronUpDownIcon,
	},
};
</script>
