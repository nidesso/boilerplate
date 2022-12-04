/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_sky_blue: {
          '50': '#ffffff',
          '100': '#f3f8fa',
          '200': '#e8f2f4',
          '300': '#dcebef',
          '400': '#d0e4e9',
          '500': '#c5dee4',
          '600': '#b9d7de',
          '700': '#add0d9',
          '800': '#a2cad3',
          '900': '#96c3ce'
        },
        blue: {
          '50': '#ffffff',
          '100': '#dbf0ff',
          '200': '#b7e2ff',
          '300': '#94d3fe',
          '400': '#70c5fe',
          '500': '#4cb6fe',
          '600': '#28a8fe',
          '700': '#0499fe',
          '800': '#0184dd',
          '900': '#016fb9'
        },
        gray: {
          '50': '#ffffff',
          '100': '#e7eae8',
          '200': '#ced5d2',
          '300': '#b6bfbb',
          '400': '#9daaa5',
          '500': '#85958e',
          '600': '#6e7e77',
          '700': '#434d49',
          '800': '#586660',
          '900': '#2e3532'
        },
        green: {
          '50': '#ffffff',
          '100': '#daffed',
          '200': '#b4ffda',
          '300': '#8fffc8',
          '400': '#69ffb5',
          '500': '#44ffa3',
          '600': '#1eff91',
          '700': '#00f87e',
          '800': '#00d26b',
          '900': '#00AD58'
        },
        orange: {
          '50': '#ffffff',
          '100': '#fbf1e6',
          '200': '#f8e4cd',
          '300': '#f4d6b3',
          '400': '#f1c99a',
          '500': '#edbb81',
          '600': '#eaae68',
          '700': '#e6a04e',
          '800': '#e39335',
          '900': '#DC851F'          
        },
        'th-primary': {
          '50': 'var(--primary-50)',
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)'
        },
        'th-secondary': {
          '50': 'var(--secondary-50)',
          '100': 'var(--secondary-100)',
          '200': 'var(--secondary-200)',
          '300': 'var(--secondary-300)',
          '400': 'var(--secondary-400)',
          '500': 'var(--secondary-500)',
          '600': 'var(--secondary-600)',
          '700': 'var(--secondary-700)',
          '800': 'var(--secondary-800)',
          '900': 'var(--secondary-900)'
        },
        'th-accent': {
          '50': 'var(--accent-50)',
          '100': 'var(--accent-100)',
          '200': 'var(--accent-200)',
          '300': 'var(--accent-300)',
          '400': 'var(--accent-400)',
          '500': 'var(--accent-500)',
          '600': 'var(--accent-600)',
          '700': 'var(--accent-700)',
          '800': 'var(--accent-800)',
          '900': 'var(--accent-900)'
        }
      }
    }
  },
  plugins: [],
}
