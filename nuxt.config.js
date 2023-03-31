// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/main.css"],

	modules: [["@pinia/nuxt", { autoImports: ["defineStore"] }]],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	runtimeConfig: {
		public: {
			API_BASE_URL: process.env.API_BASE_URL,
			ROLES: process.env.ROLES,
		},
	},
});
