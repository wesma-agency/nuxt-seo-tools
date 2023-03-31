<template>
	<div>
		<div class="block mb-1 text-sm font-medium text-gray-700">{{ config.placeholder }}:</div>
		<textarea  :value="inputValue" @input="emit('update:inputValue', $event.target.value)" :name="config.name" class="relative h-48 resize-none block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" :placeholder="config.placeholder"></textarea>
	</div>
</template>

<script setup>
const props = defineProps({
	config: Object,
	inputValue: String
});

const emit = defineEmits(["update:inputValue"]);

</script>

