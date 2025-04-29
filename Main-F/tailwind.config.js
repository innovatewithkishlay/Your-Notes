/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Arial", "sans-serif"],
            serif: ["Times New Roman", "serif"],
            mono: ["Courier New", "monospace"],
            // Add your custom font families here
            // custom: ["Your Custom Font", "sans-serif"],
        },
    },
    plugins: [],
};
