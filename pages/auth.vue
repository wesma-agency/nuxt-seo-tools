<template>
	<section class="page-auth">
		<div class="container m-auto">
			<div class="page-auth__wrap">
				<BlockAuth />
			</div>
		</div>
	</section>
</template>

<script>
import BlockAuth from "@/components/blockAuth";

definePageMeta({
	layout: "auth",
});

export default {};
</script>
