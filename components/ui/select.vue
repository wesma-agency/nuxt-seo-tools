<template>
	<div>
		<Listbox as="div" v-model="selected" v-on:update:modelValue="(value) => emit('update:modelValue', value)">
			<ListboxLabel v-if="islabel" class="block text-sm font-medium text-gray-700">Сфера деятельности:</ListboxLabel>
			<div class="relative mt-1">
				<ListboxButton class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm">
					<span class="flex items-center">
						<span class="block truncate">{{ selected.name }}</span>
					</span>
					<span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
						<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</ListboxButton>

				<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
					<ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						<ListboxOption as="template" v-for="person in selectdata" :key="person.id" :value="person" v-slot="{ active, selected }">
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
</template>

<script setup>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid/index";

const props = defineProps({
	selectdata: Array,
	islabel: Boolean,
	selectedDefault: String,
});

const emit = defineEmits(["update:modelValue"]);

const selected = reactive(props.selectedDefault ? props.selectdata.find((item) => item.name == props.selectedDefault) : props.selectdata[0]);
</script>
