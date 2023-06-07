/* @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'sm': '280px'
            }
        },
    },
    plugins: [],
}