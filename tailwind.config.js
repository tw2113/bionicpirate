module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			scheeles_green: '#478800',
			scheeles_blue: '#00478A',
			scheeles_purple: '#8A0047'
		}
	},
	plugins: [],
	purge: [
		// Use *.tsx if using TypeScript
		'./pages/**/*.js',
		'./components/**/*.js'
	],
}
