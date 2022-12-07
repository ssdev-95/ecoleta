/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
			colors: {
				green: {
					'200': '#e1faec',
					'400': '#34cb79'
				},
				zinc: {
					'50': '#ffffff',
					'200': '#f0f0f5',
					'300': '#a0a0b2',
					'400': '#6c6c80'
				},
				blue: {
					'900': '#322153'
				}
			},
			fontFamily: {
				butu: 'Ubuntu, sans-serif',
			  sans:  'Roboto, sans-serif'
			}
		},
  },
  plugins: [],
}
