// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/main.css"],

	modules: [["@pinia/nuxt", { autoImports: ["defineStore"] }]],

	// alias: {
	// 	pinia: process.env.NODE_ENV === "production" ? "/node_modules/pinia/dist/pinia.mjs" : "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
	// },

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},


});
