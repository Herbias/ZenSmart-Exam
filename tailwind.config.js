/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#E9EDF9",
        info: "#dbe9fd",
        success: "#E0F6F2",
        failure: "FCE4E5",
        heading: "#2E384D",
        body: "#8798AD",
        unselected: "#B0BAC9",
        selected: "#194787",
        blue: {
          0: "#dbe9fd",
          1: "#0b6bf2",
          2: "#0243eb",
        },
        teal: {
          0: "#d9f6f9",
          1: "#00c1d4",
          2: "#00a6c0",
        },
        green: {
          0: "#e0f6f2",
          1: "#2cc2a5",
          2: "#11a783",
        },
        yellow: {
          0: "#fef6e1",
          1: "#f7c137",
          2: "#f3a618",
        },
        red: {
          0: "#fce4e5",
          1: "#e84a50",
          2: "#dc262b",
        },
        purple: {
          0: "#eee6ff",
          1: "#8c54ff",
          2: "#652eff",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
  plugins: [],
};
