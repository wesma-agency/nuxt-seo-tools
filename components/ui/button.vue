<template>
	<button :type="config.type" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
		<span v-if="config.icon" class="absolute inset-y-0 left-0 flex items-center pl-3">
			<LockClosedIcon class="h-5 w-5 text-white-700 group-hover:text-white-600" aria-hidden="true" />
		</span>
		<slot> {{ config.name }} </slot>
	</button>
</template>

<script>
import { LockClosedIcon } from "@heroicons/vue/20/solid/index";

export default {
	props: {
		config: Object,
	},

	components: {
		LockClosedIcon,
	},
};
</script>
