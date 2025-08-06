import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Electric cyberpunk colors
				electric: {
					blue: 'hsl(195 100% 50%)',
					purple: 'hsl(270 80% 35%)',
					green: 'hsl(120 100% 40%)',
					cyan: 'hsl(195 100% 70%)'
				}
			},
			backgroundImage: {
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-cyber': 'var(--gradient-cyber)',
				'gradient-lightning': 'var(--gradient-lightning)'
			},
			boxShadow: {
				'electric': 'var(--glow-electric)',
				'purple': 'var(--glow-purple)',
				'green': 'var(--glow-green)'
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-electric': 'pulse-electric 2s ease-in-out infinite',
				'lightning': 'lightning 0.3s ease-in-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'slide-right': 'slide-right 0.8s ease-out',
				'fade-in': 'fade-in 1s ease-out'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-electric': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: 'var(--glow-electric)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 40px hsl(195 100% 50% / 0.8)'
					}
				},
				'lightning': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' },
					'100%': { opacity: '0', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(100px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
