/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3E00ED'
			},
			gridTemplateColumns: {
				control: 'repeat(auto-fill, minmax(300px, 1fr))'
			}
		}
	},
	plugins: []
};
