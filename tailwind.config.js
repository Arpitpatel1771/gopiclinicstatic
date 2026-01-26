/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'], // or your paths
    theme: {
        extend: {
            colors: {
                impBlue: '#01004e',  // ← your custom color name and hex value
                goldAcc: '#DB9D18',
            },
        },
    },
    plugins: [],
}
