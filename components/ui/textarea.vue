<template>
	<div>
		<div class="block mb-1 text-sm font-medium text-gray-700">{{ config.placeholder }}:</div>
		<textarea :value="config.value" @change="updateValue" :name="config.name" class="relative h-48 resize-none block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm" :placeholder="config.placeholder"></textarea>
	</div>
</template>

<script>
export default {
	props: {
		config: Object,
	},

	methods: {
		updateValue(event) {
			this.$emit("modelValue", event.target.value);
		},
	},
};
</script>
