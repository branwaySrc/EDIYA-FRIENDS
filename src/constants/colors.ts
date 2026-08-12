export const ediyaBlue = "#1B2E74";
export const colors = {
	text: {
		primary: ediyaBlue,
		default: "#222222",
		sub: "#64748B",
		white: "#FFFFFF",
	},
	background: {
		buttonDefault: "#E6F0FA",
		buttonPrimary: ediyaBlue,
	},
} as const;

export type TextColor = keyof typeof colors.text;
export type ButtonBackgroundColor = keyof typeof colors.background;
