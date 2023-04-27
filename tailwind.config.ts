import { type Config } from "tailwindcss";

// const breakPoints = {
// 	min640: '640px',
// 	min768: '768px',
// 	min1024: '1024px',
// 	min1280: '1280px',
// 	min1366: '1366px',
// 	min1536: '1536px',
// 	min1920: '1920px',
// };

/**
 * DESKTOP FIRST BREAKPOINTS
 */
const breakPointsMax = {
  "@fullHD": { max: "1920px" },
  // => @media (max-width: 1920px) { ... }

  "@prefhd": { max: "1535px" },
  // => @media (max-width: 1535px) { ... }

  "@laptop": { max: "1366px" },
  // => @media (max-width: 1366px) { ... }

  "@prelaptop": { max: "1279px" },
  // => @media (max-width: 1279px) { ... }

  "@tablet": { max: "1024px" },
  // => @media (max-width: 1023px) { ... }

  "@phonemd": { max: "767px" },
  // => @media (max-width: 767px) { ... }

  "@sm": { max: "639px" },
  // => @media (max-width: 639px) { ... }

  "@extra-small": { max: "450px" },
  // => @media (max-width: 450px) { ... }
};
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: breakPointsMax,
  },
  plugins: [],
} satisfies Config;
