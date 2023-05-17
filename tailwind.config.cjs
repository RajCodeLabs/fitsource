const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui', '@tailwindcss/line-clamp')]
};

module.exports = config;
