import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    light: "#f472b6",
                    DEFAULT: "#a21caf",
                    dark: "#6d28d9",
                },
                secondary: "#FBE843",
                accent: {
                    yellow: "#FBE843",
                    pink: "#ee2b69",
                    fuchsia: "#C026D3",
                    indigo: "#6366f1",
                },
                surface: {
                    DEFAULT: "#232042",
                    light: "312e81",
                    dark: "#1e1b4b",
                },
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
                transparent: "transparent",
            },
            fontFamily: {
                "work-sans": ["var(--font-work-sans)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                glass: "0 8px 40px 0 #6d28d955",
                card: "0 4px 32px 0 #6d28d933",
                btn: "0 2px 8px 0 #23204233",
            },
        },
    },
    plugins: [tailwindcssAnimate, typography],
};

export default config;