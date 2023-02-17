<template>
	<div>
		<section class="py-11 px-6">
			<div class="container m-auto">
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Анализатор топа</h2>

				<form class="space-y-6 p-8 basis-2/4 rounded-3xl bg-white shadow-[0px_0px_20px_#d9dcec]">
					<div>
						<TextAreatUi :config="{ name: 'keys', placeholder: 'Ключи' }" v-on:model-value="updaetInputValue" />
					</div>

					<div class="max-w-md">
						<SelectUi
							:config="{
								name: 'Регион',
								select: [
									{ id: 1, name: 'Архангельск' },
									{ id: 2, name: 'Барнаул' },
									{ id: 3, name: 'Брянск' },
								],
							}"
						/>
					</div>

					<div>
						<RadioUi
							:config="{
								name: 'Метод',
								radio: {
									name: 'radio-1',
									list: [
										{ id: 1, name: 'POST', checked: true },
										{ id: 2, name: 'GET', checked: false },
									],
								},
							}"
						/>
					</div>

					<div class="max-w-md">
						<ButtonUi
							:config="{
								type: 'submit',
								name: 'Найти',
								icon: false,
							}"
						/>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
import TextAreatUi from "@/components/ui/textarea";
import SelectUi from "@/components/ui/select";
import RadioUi from "@/components/ui/radio";
import ButtonUi from "@/components/ui/button";

export default {
	components: {
		TextAreatUi,
		SelectUi,
		RadioUi,
		ButtonUi,
	},

	methods: {
		updaetInputValue(props) {
			console.log(props);
		},
	},
};
</script>
