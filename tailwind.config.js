/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    // Add paths to your components here
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-grad-light-mid': 'var(--primary-grad-light-mid)',
        'primary-grad-light-end': 'var(--primary-grad-light-end)',
        'primary-grad-dark-mid': 'var(--primary-grad-dark-mid)',
        'primary-grad-dark-end': 'var(--primary-grad-dark-end)',
        'secondary': 'var(--secondary)',
        'secondary-grad-light-mid': 'var(--secondary-grad-light-mid)',
        'secondary-grad-light-end': 'var(--secondary-grad-light-end)',
        'secondary-grad-dark-mid': 'var(--secondary-grad-dark-mid)',
        'secondary-grad-dark-end': 'var(--secondary-grad-dark-end)',
        'button-primary': 'var(--button-primary)',
        'button-secondary': 'var(--button-secondary)',
        'button-text': 'var(--button-text)',
        'link-text': 'var(--link-text)',
        'text': 'var(--text)',
        'placeholder': 'var(--placeholder)',
        'background': 'var(--background)',
      },
      backgroundImage: {
        'gradient-button-light': 'linear-gradient(to right, #1E88E5, #005cb2, #004a8c)',
        'gradient-button-dark': 'linear-gradient(to right, #005cb2, #3377b8, #004a8c)',
      },
    },
  },
  plugins: [],
};
