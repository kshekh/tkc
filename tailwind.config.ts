import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    
    extend: {
      fontFamily: {
				sans: ["var(--league_lpartan)", ...defaultTheme.fontFamily.sans],
				montserrat: ["var(--montserrat)", ...defaultTheme.fontFamily.sans],
				inter: ["var(--inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark:'#262626',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)rew",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          2:'var(--primaryHover)',
          3:'#FF7DBA',
          4:'#6F0034',
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage:{
        'gradient-1':'linear-gradient(to top, #f2f2f2 100%, #f2f2f2 86%, rgba(217, 217, 217, 0) 35%)',
        'gradient-2':'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)',
      },
      boxShadow:{
        1:'0 1px 6px -4px rgba(0, 0, 0, 0.1)',
       2:'0 4px 6px 0 rgba(0, 0, 0, 0.13)',
       3:'0px 4px 6px -4px rgba(0, 0, 0, 0.1), inset 0px 2px 6px rgba(0, 0, 0, 0.12)'
      }
    },

    screens: {
			mv: "360px",
			// => @media (min-width: 480px) { ... }

			xs: "480px",
			// => @media (min-width: 480px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			ml: "992px", // Medium Large
			// => @media (min-width: 992px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			sl: "1199px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }

			"3xl": "1921px",
			// => @media (min-width: 1920px) { ... }	 

			wrap: "1527px",
			// => @media (min-width: 1550px) { ... }
      
			innerwrap: "1445px",
			// => @media (min-width: 1550px) { ... }

		},

  },
  plugins: [require("tailwindcss-animate"),  require('@tailwindcss/typography'),],
} satisfies Config

export default config