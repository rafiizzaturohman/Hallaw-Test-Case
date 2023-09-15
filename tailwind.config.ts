import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('../public/bg.png')"
      },
    },
    screens: {
      'xxs': '320px',
      'xs': '560px',
      'sm': '680px',
      'base': '880px',
      'md': '1200px',
      'lg': '1280px',
      'xl': '1440px',
    }
  },
  plugins: [],
}
export default config
