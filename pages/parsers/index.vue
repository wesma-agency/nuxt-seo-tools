<template>
	<div>
		<section class="py-11 px-6">
			<div class="container m-auto">
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Парсеры</h2>

				<div class="px-3 md:lg:xl:px-16 border-t border-b py-16 bg-opacity-10" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')">
					<div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
						<NuxtLink to="/parsers/pars-one" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon1)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon1" @onComplete="stopAnim(icon1)" :loop="1" :autoPlay="false" :animationData="iconPars1" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">Анализатор топа</p>
								<p class="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic set of people.</p>
							</a>
						</NuxtLink>

						<NuxtLink to="/parsers/pars-two" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon2)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon2" @onComplete="stopAnim(icon2)" :loop="1" :animationData="iconPars2" :autoPlay="false" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">Проверка страниц на фильтр</p>
								<p class="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
							</a>
						</NuxtLink>

						<NuxtLink to="/parsers/pars-three" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon3)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon3" @onComplete="stopAnim(icon3)" :loop="1" :animationData="iconPars3" :autoPlay="false" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">Съем позиций</p>
								<p class="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the top institutions worldwide.</p>
							</a>
						</NuxtLink>

						<NuxtLink to="/parsers/1" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon4)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon4" @onComplete="stopAnim(icon4)" :loop="1" :animationData="iconPars4" :autoPlay="false" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">Проверка текста копирайтера</p>
								<p class="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
							</a>
						</NuxtLink>

						<NuxtLink to="/parsers/1" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon5)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon5" @onComplete="stopAnim(icon5)" :loop="1" :animationData="iconPars5" :autoPlay="false" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">Анализатор показателя ИКС</p>
								<p class="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your preparation.</p>
							</a>
						</NuxtLink>

						<NuxtLink to="/parsers/1" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon6)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon6" @onComplete="stopAnim(icon6)" :loop="1" :animationData="iconPars6" :autoPlay="false" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">Парсинг слов из тегов страницы</p>
								<p class="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation</p>
							</a>
						</NuxtLink>

						<NuxtLink to="/parsers/1" custom v-slot="{ href, navigate }">
							<a @mouseenter="playAnim(icon7)" :href="href" @click="navigate" class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
								<client-only>
									<Vue3Lottie ref="icon7" @onComplete="stopAnim(icon7)" :loop="1" :animationData="iconPars7" :autoPlay="false" :height="170" :width="170" />
								</client-only>
								<p class="text-xl font-medium text-slate-700 mt-3">ТЗ для копирайтера</p>
								<p class="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation</p>
							</a>
						</NuxtLink>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import iconPars1 from "@/assets/img/pars-icon-1.json";
import iconPars2 from "@/assets/img/pars-icon-2.json";
import iconPars3 from "@/assets/img/pars-icon-3.json";
import iconPars4 from "@/assets/img/pars-icon-4.json";
import iconPars5 from "@/assets/img/pars-icon-5.json";
import iconPars6 from "@/assets/img/pars-icon-6.json";
import iconPars7 from "@/assets/img/pars-icon-7.json";
import "vue3-lottie/dist/style.css";

let icon1 = ref("icon1");
let icon2 = ref("icon2");
let icon3 = ref("icon3");
let icon4 = ref("icon4");
let icon5 = ref("icon5");
let icon6 = ref("icon6");
let icon7 = ref("icon7");

function playAnim(el) {
	el.play();
}

function stopAnim(el) {
	el.stop();
}
</script>
