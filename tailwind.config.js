/** @type {import('tailwindcss').Config} */
export default {
    extend: {
        keyframes: {
            wiggle: {
                '0%, 100%': { transform: 'rotate(-7deg)' },
                '50%': { transform: 'rotate(7deg)' },
            },
            scroll: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
            },
        },
        animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
            scroll: 'scroll 40s linear infinite',
        },
    },
};
export const plugins = [];
