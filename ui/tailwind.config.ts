import type { Config } from 'tailwindcss';
import typografy from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      yellow: '#FFF00B',
      blue: '#0063EE',
      text: '#161616',
      blackbg: '#161616',
      whitebg: '#EFEDFF',
      whitebg2: '#EFEDFFCC',
      whitebglight: '#EFEDFF2B',
      whitebglight2: '#EFEDFF1A',
      whitebglight3: '#EFEDFF0A',
      white: '#FFF',
      graytext: '#C1C1C1',
      blueOpacityZero: '#0063EE00',
      whitebgOpacity: '#efedffb3',
    },
    fontFamily: {
      display: ['Kanit', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        desktop: '1120px',
        tablet: '680px',
        mobile: '361px',
        menu: '330px',
      },
      colors: {
        black: '#161616',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typografy, forms, aspectRatio],
};
export default config;

