import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dspBlue: '#2494cb',
        dspBlueHover: '#228dc2',
        dspDarkBlue: '#0973B2',
        dspDarkBlueHover: '#116EA8',
        dspGreen: '#00aa7d',
        dspGreenHover: '#00a176',
        dspGray: '#f3f3f3',
        dspDarkGray: '#6b7280',
        dspText: '#2c3749',
        dspTransparent: 'transparent',
      },
    },
  },
  plugins: [],
};
export default config;
