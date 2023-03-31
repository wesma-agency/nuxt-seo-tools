<template>
	<div>
		<section class="py-11 px-6">
			<div class="container m-auto">
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Анализатор топа</h2>

				<form v-on:submit.prevent="getTopAnalysis" class="space-y-6 p-8 basis-2/4 rounded-3xl bg-white shadow-[0px_0px_20px_#d9dcec]">
					<div>
						<TextAreatUi :config="{ name: 'keys', placeholder: 'Ключи' }" v-model:input-value="keys" />
					</div>

					<div class="max-w-md">
						<Select :selectedDefault="selectedCity.name" :selectdata="cities" v-on:update:modelValue="(value) => (selectedCity = value.name)" :islabel="false"></Select>
					</div>

					<div>
						<RadioUi
							v-on:select-radio="(value) => (method = value)"
							:config="{
								name: 'Метод',
								radio: {
									name: 'radio-1',
									list: radioList,
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

<script setup>
import TextAreatUi from "@/components/ui/textarea";
import Select from "@/components/ui/select";
import RadioUi from "@/components/ui/radio";
import ButtonUi from "@/components/ui/button";
import ParsersService from "@/service/parsersService";

const cities = [
	{
		id: 1,
		region: 213,
		name: "Москва",
	},
	{
		id: 2,
		region: 20,
		name: "Архангельск",
	},
	{
		id: 3,
		region: 37,
		name: "Астрахань",
	},
	{
		id: 4,
		region: 197,
		name: "Барнаул",
	},
	{
		id: 5,
		region: 4,
		name: "Белгород",
	},
	{
		id: 6,
		region: 77,
		name: "Благовещенск",
	},
	{
		id: 7,
		region: 191,
		name: "Брянск",
	},
	{
		id: 8,
		region: 24,
		name: "Великий Новгород",
	},

	{
		id: 9,
		region: 75,
		name: "Владивосток",
	},

	{
		id: 10,
		region: 33,
		name: "Владикавказ",
	},

	{
		id: 11,
		region: 192,
		name: "Владимир",
	},

	{
		id: 12,
		region: 38,
		name: "Волгоград",
	},

	{
		id: 13,
		region: 21,
		name: "Вологда",
	},

	{
		id: 14,
		region: 193,
		name: "Воронеж",
	},

	{
		id: 15,
		region: 1106,
		name: "Грозный",
	},

	{
		id: 16,
		region: 54,
		name: "Екатеринбург",
	},

	{
		id: 17,
		region: 5,
		name: "Иваново",
	},

	{
		id: 18,
		region: 63,
		name: "Иркутск",
	},

	{
		id: 19,
		region: 41,
		name: "Йошкар-Ола",
	},

	{
		id: 20,
		region: 43,
		name: "Казань",
	},

	{
		id: 21,
		region: 22,
		name: "Калининград",
	},

	{
		id: 22,
		region: 64,
		name: "Кемерово",
	},

	{
		id: 23,
		region: 7,
		name: "Кострома",
	},

	{
		id: 24,
		region: 35,
		name: "Краснодар",
	},

	{
		id: 25,
		region: 62,
		name: "Красноярск",
	},

	{
		id: 26,
		region: 53,
		name: "Курган",
	},

	{
		id: 27,
		region: 8,
		name: "Курск",
	},

	{
		id: 28,
		region: 9,
		name: "Липецк",
	},

	{
		id: 29,
		region: 28,
		name: "Махачкала",
	},

	{
		id: 30,
		region: 1,
		name: "Москва и Московская область",
	},

	{
		id: 31,
		region: 23,
		name: "Мурманск",
	},

	{
		id: 32,
		region: 1092,
		name: "Назрань",
	},

	{
		id: 33,
		region: 30,
		name: "Нальчик",
	},

	{
		id: 34,
		region: 47,
		name: "Нижний Новгород",
	},

	{
		id: 35,
		region: 65,
		name: "Новосибирск",
	},

	{
		id: 36,
		region: 66,
		name: "Омск",
	},

	{
		id: 37,
		region: 10,
		name: "Орел",
	},

	{
		id: 38,
		region: 48,
		name: "Оренбург",
	},

	{
		id: 39,
		region: 49,
		name: "Пенза",
	},

	{
		id: 40,
		region: 50,
		name: "Пермь",
	},

	{
		id: 41,
		region: 25,
		name: "Псков",
	},

	{
		id: 42,
		region: 39,
		name: "Ростов-на-Дону",
	},

	{
		id: 43,
		region: 11,
		name: "Рязань",
	},

	{
		id: 44,
		region: 51,
		name: "Самара",
	},

	{
		id: 45,
		region: 2,
		name: "Санкт-Петербург",
	},

	{
		id: 46,
		region: 42,
		name: "Саранск",
	},

	{
		id: 47,
		region: 12,
		name: "Смоленск",
	},

	{
		id: 48,
		region: 239,
		name: "Сочи",
	},

	{
		id: 49,
		region: 36,
		name: "Ставрополь",
	},

	{
		id: 50,
		region: 973,
		name: "Сургут",
	},

	{
		id: 51,
		region: 13,
		name: "Тамбов",
	},

	{
		id: 52,
		region: 14,
		name: "Тверь",
	},

	{
		id: 53,
		region: 67,
		name: "Томск",
	},

	{
		id: 54,
		region: 15,
		name: "Тула",
	},

	{
		id: 55,
		region: 195,
		name: "Ульяновск",
	},

	{
		id: 56,
		region: 172,
		name: "Уфа",
	},

	{
		id: 57,
		region: 76,
		name: "Хабаровск",
	},

	{
		id: 58,
		region: 45,
		name: "Чебоксары",
	},

	{
		id: 59,
		region: 56,
		name: "Челябинск",
	},

	{
		id: 60,
		region: 1104,
		name: "Черкесск",
	},

	{
		id: 61,
		region: 16,
		name: "Ярославль",
	},
]

const radioList = [
	{ id: 1, name: 'POST', checked: true, value: 'POST' },
	{ id: 2, name: 'GET', checked: false, value: 'GET' },
];

const isLoading = ref(false);
const keys = ref('');
const selectedCity = ref(cities[0].name);
const method = ref(radioList.find(item => item.checked == true)?.name);

async function getTopAnalysis() {
	isLoading.value = true;
	const response = await ParsersService.getTopAnalysis(keys.value, selectedCity.value, method.value);
	isLoading.value = false;
	if (response.success) {
		resPosition.value = response.data.positions;
	}
}

</script>
