/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "twitter-neutral-50": "#F9F9F9",
        "twitter-neutral-200": "#E4E4E4",
        "twitter-blue-default": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "blue-washed": 'rgba(117,190,239,0.20)',
        "btn-stroke": '#546A7A',
        "neutral/200": "rgba(228,228,228,1",
        "Searchbar-fill": "212327",
        "Card-fill": "16181C",
        "Sucess": "00BE74",
        "Error": "8B141A",
        "border-color": "rgba(29, 155, 240, 0.24)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};


// fontFamily: {
//   inter: ["Inter", "sans-serif"],
//   chirp: ["Chirp"],
// },
// fontSize: {
//   "2.5xl": "26px",
// },
// colors: {
//   "twitter-neutral-50": "#F9F9F9",
//   "twitter-neutral-200": "#E4E4E4",
//   "twitter-blue-default": "#1D9BF0",
//   "twitter-blue-hover": "#1871CA",
//   "twitter-blue-disabled": "#E5D87",
//   "blue-washed":'rgba(117,190,239,0.20)',
//   "btn-stroke":'#546A7A',
//   "neutral/200":"rgba(228,228,228,1",
//   "Searchbar-fill":"212327",
//   "Card-fill":"16181C",
//   "Sucess":"00BE74",
//   "Error":"8B141A",
//   "border-color": "rgba(29, 155, 240, 0.24)",
// },
// spacing: {
//   97.5: "390px",
//   88: "334px",
//   26: "100px",
//   155.5: "155.5px",
//   136: "136.129px",
//   145: "145.238px",
//   366: "366.817",
// },
// borderRadius: {
//   "signup-radius": "65px",
// },
// boxShadow: {
//   signup: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
// },
// backdropBlur: {
//   "xl-1": "23.668209075927734px",
// },

