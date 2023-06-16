/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'rotate(3deg)' },
          // '50%': { transform: 'translateY(5%)' },
        },

      },
      animation: {
        wiggle: 'wiggle 20s ease-in-out infinite',
      },

    },
  },
  plugins: [require('@tailwindcss/forms')],
}
