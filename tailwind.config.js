/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    'sm': '100%',
                    'md': '100%',
                    'lg': '1024px',
                    'xl': '1280px',
                    '2xl': '1600px',
                },
                padding: "1rem"
            }
        },
    },
    plugins: [],
}

