/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			transitionTimingFunction: {
				'sticky-menu': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',

			},
			width: {
				'boxWidth': '350px'
			},
			screens: {
				'sm-s': '450px',
				'm-m':'375px' //mobile-m
			},
			colors: {
				'mainColor': 'rgb(44, 44, 44)',
				'secondMainColor': 'rgb(94, 94, 94)',
				'filterBaground': "rgba(0, 0, 0, 0.132)"
			}
		},
	},
	plugins: [],
}