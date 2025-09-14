/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'background': 'hsl(var(--background))',
                'background-alt': 'hsl(var(--background-alt))',
                'foreground': 'hsl(var(--foreground))',
                'primary': 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',
                'accent': 'hsl(var(--accent))',
                'window-bg': 'hsl(var(--window-bg))',
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'],
            },
            animation: {
                blink: 'blink 1s step-end infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
            },
            keyframes: {
                blink: {
                    'from, to': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                'fade-in': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(10px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [],
}