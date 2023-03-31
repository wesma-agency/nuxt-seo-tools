<template>
	<div>
		<div class="block mb-1 text-sm font-medium text-gray-700">{{ config.name }}:</div>

		<div v-for="item in config.radio.list" :key="item.id" class="flex">
			<input :checked="item.checked" :value="item.value" :name="config.radio.name" @change="emit('selectRadio', $event.target.value)" type="radio" class="mr-2 appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:mt-0.5 before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5" />
			<span>{{ item.name }}</span>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	config: Object,
});

const emit = defineEmits(["selectRadio"]);

</script>
