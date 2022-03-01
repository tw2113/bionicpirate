module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			scheeles_green: '#478800',
			scheeles_blue: '#00478A',
			scheeles_purple: '#8A0047'
		},
		screens: {
			xs       : '480px',
			sm       : '640px',
			portrait : '768px',
			md       : '960px',
			md_max   : {max: '960px'},
			landscape: '1024px',
			lg       : '100%',
			limit    : '1270px'
		}
	},
	plugins: [],
	purge: [
		// Use *.tsx if using TypeScript
		'./pages/**/*.js',
		'./components/**/*.js'
	],
}
