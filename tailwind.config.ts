import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                text: '#efe1ec',
                background: '#24001B',
                primary: '#E08FA6',
                secondary: '#251321',
                accent: '#41a3c3'
            }
        },
    },
    plugins: [],
}
export default config
