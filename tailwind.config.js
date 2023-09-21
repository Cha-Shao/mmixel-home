/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('/hero.webp')",
        "hero-dark": "url('/hero-dark.webp')",
      },
      colors: {
        main: '#ff8729',
        // light
        lbg: '#fafafd',
        lpbg: '#f0f0f6',
        ldv: '#e0e0e6',
        ldae: '#b2b1b8',
        lext: '#0000500a',
        // dark
        dbg: '#1c1c1d',
        dpbg: '#121212',
        ddv: '#4f4f52',
        ddae: '#404046',
        dext: '#cacada0a',

        // status
        info: '#33b1fe',
        success: '#9fdb1d',
        warn: '#f6c941',
        error: '#ff3b30',
      },
      letterSpacing: { footer: '1rem' },
      gridTemplateColumns: {
        rate: 'min-content 1fr min-content'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      },
      gridRow: {
        'span-7': 'span 7 / span 7'
      },
      aspectRatio: { photo: '8 / 6' },
    },
  },
}