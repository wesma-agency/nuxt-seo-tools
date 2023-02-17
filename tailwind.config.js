/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
	theme: {
		extend: {
			colors: {
				"green-600": "rgb(67 190 162)",
				"green-700": "rgb(57 176 149)",
				"gray-main": "rgba(233, 235, 247, 1)",
				"white-500": "rgba(255, 255, 255, 1) !important",
			},
		},
	},
	plugins: [],
};
