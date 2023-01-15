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
			},
			screens: {
				mb: { 'max':'720px' },
				md: { 'min':'720px' }
			},
			backgroundImage: {
				spinner: 'linear-gradient(45deg, #322153, transparent 90%)',
				'spinner-alt': 'linear-gradient(45deg, #e1faec, transparent 90%)'
			}
		},
  },
  plugins: [],
}
