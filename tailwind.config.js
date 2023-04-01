const plugin = require('tailwindcss/plugin');

module.exports = {  
  mode: 'jit',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    plugin(
        function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme('fontSize.4xl'), fontWeight: '500' },
                h2: { fontSize: theme('fontSize.3xl'), fontWeight: '500' },
                h4: { fontSize: theme('fontSize.xl'), fontWeight: '500' },
                h5: { fontSize: theme('fontSize.md'), fontWeight: '500' },
            })
        }
    ),
  ],
  purge: {
    content: [
      './templates/**/*.twig',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
  },
  theme: {
        colors: {
            primary: '#FF5405',
            secondary: '#a009fe',
            white: '#ffffff',
            black: '#000000',
            transparent: 'rgba(0,0,0,0)',
            status: {
                green: '#09fd27',
                yellow: '#fddf0a',
                red: '#fd370a',
                new: '#ffaf',
                fixes: '#faf',
                updates: '#aff',
            },
            grey: {
                100: '#626262',
                200: '#181818',
                300: '#171717',
            },            
            brands: {
                facebook: '#4267B2',
                twitter: '#1DA1F2',
                instagram: '#dd0248',
                linkedin: '#2867B2',
                dribbble: '#ea4c89',
                github: '#FFFFFF',
                youtube: '#e52d27',
                vimeo: '#1ab7ea',
                pinterest: '#cc2127',
            },
        },
        boxShadow: {       
            circle: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        fontFamily: {
            'sans-primary': 'Basier Square',
        },
        extend: {
            fontSize: (theme) => ({
                xs: ['0.75rem', theme('lineHeight.normal')], // 12
                sm: ['0.875rem', theme('lineHeight.normal')], // 14
                base: ['1rem', theme('lineHeight.normal')], // 16
                md: ['1.125rem', theme('lineHeight.normal')], // 18
                lg: ['1.25rem', theme('lineHeight.normal')], // 20
                xl: ['1.5rem', theme('lineHeight.normal')], // 24
                '2xl': ['1.875rem', theme('lineHeight.normal')], // 30
                '3xl': ['2.25rem', theme('lineHeight.normal')], // 36
                '4xl': ['3rem', theme('lineHeight.normal')], // 48
                '5xl': ['4rem', theme('lineHeight.normal')], // 64
                '6xl': ['4.5rem', theme('lineHeight.normal')], // 72
            }),
            animation: {
                marquee: 'marquee 30s linear infinite',
                marquee2: 'marquee2 30s linear infinite',
                noise: 'noise 8s steps(10) infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                noise: {
                    '0%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -10%)' },
                    '20%': { transform: 'translate(-15%, 5%)' },
                    '30%': { transform: 'translate(7%, -25%)' },
                    '40%': { transform: 'translate(-5%, 25%)' },
                    '50%': { transform: 'translate(-15%, 10%)' },
                    '60%': { transform: 'translate(15%, 0%)' },
                    '70%': { transform: 'translate(0%, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                    '100%': { transform: 'translate(0, 0)' },
                },
            },
        },
    },
    variants: {
        animation: ['motion-safe', 'motion-reduce'],
    }
};
