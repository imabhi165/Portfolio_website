/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateSphere: "rotateSphere 10s linear infinite",
      },
      keyframes: {
        rotateSphere: {
          "0%": {
            transform: "rotateX(0deg) rotateY(0deg)", 
          },
          "100%": {
            transform: "rotateX(360deg) rotateY(360deg)", 
          },
        },
      },
      perspective: {
        "1000": "1000px", 
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [],
};



