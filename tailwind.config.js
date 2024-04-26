module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
	theme: {
		screens: {
			xs       : '480px',
			sm       : '640px',
			portrait : '768px',
			md       : '960px',
			md_max   : {max: '960px'},
			landscape: '1024px',
			lg       : '100%',
			limit    : '1270px'
		},
		extend: {
			boxShadow: {
				scheeles_boxshadow: 'box-shadow: 0 0 50px 25px var(--scheeles_purple)'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				scheeles_green: '#478800',
				scheeles_blue: '#00478A',
				scheeles_purple: '#8A0047',
				mummy_brown: '#8f4a21'
			}
		}
	},
	plugins: [],
	content: [
		// Use *.tsx if using TypeScript
		'./pages/**/*.js',
		'./components/**/*.js'
	],
}
