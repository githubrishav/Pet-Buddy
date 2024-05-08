/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('https://img.freepik.com/free-vector/silhouette-shadow-forest-scene_1308-102365.jpg?w=1380&t=st=1714686086~exp=1714686686~hmac=253fa4c996f638008e5bd4944f1d53bfc90e8ef0e1fede1dc8c2fa96a818e15d')"},
    },
  },
  plugins: [],
}