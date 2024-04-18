/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            animation: {
                'pulse-fast': 'pulse 0.5s linear infinite',
            },
        },
	},
	plugins: [],
    darkMode: 'class',
}
