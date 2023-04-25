/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				Sedgwick: ['Sedgwick Ave Display', 'cursive'],
			},
			keyframes: {
				'show-alert': {
					'0%': {
						opacity: 0,
					},
					'10%, 100%': {
						opacity: 1,
					},
				},
				'hidden-alert': {
					'0%': {
						opacity: 1,
					},
					'10%, 100%': {
						opacity: 0,
					},
				},
			},
			animation: {
				'show-alert': 'show-alert 8s',
				'hidden-alert': 'hidden-alert 8s ease-in-out',
			},
		},
	},
	plugins: [],
}
