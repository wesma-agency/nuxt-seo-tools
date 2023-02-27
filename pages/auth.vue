<template>
	<section class="page-auth">
		<div class="container m-auto">
			<div class="page-auth__wrap">
				<BlockAuth />
			</div>
		</div>
	</section>
</template>

<script setup>
import BlockAuth from "@/components/blockAuth";
import { usersStore } from "@/stores/userStore";

definePageMeta({
	layout: "auth",
});
</script>
