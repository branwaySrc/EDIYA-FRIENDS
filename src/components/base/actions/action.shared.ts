import { ReactNode } from "react";

import { ButtonBackgroundColor, colors } from "@/constants/colors";

import { textSizeStyle } from "../typography";

export type ActionSize = keyof typeof textSizeStyle;
export type ActionRounded = "full" | number;

export type ActionBaseProps = {
	children?: ReactNode;
	className?: string;
	px?: number;
	py?: number;
	rounded?: ActionRounded;
	backgroundColor?: ButtonBackgroundColor;
};

export const iconSize = {
	xs: 15,
	sm: 16,
	base: 19,
	lg: 24,
} as const;

export const paddingSize = {
	xs: { px: 16, py: 8 },
	sm: { px: 16, py: 8 },
	base: { px: 18, py: 10 },
	lg: { px: 20, py: 12 },
} as const;

export function getActionClassName(className?: string) {
	return ["inline-flex items-center justify-center gap-2 transition-colors", className].filter(Boolean).join(" ");
}

export function getBorderRadiusValue(rounded: ActionRounded) {
	if (rounded === "full") {
		return "9999px";
	}

	return `${rounded}px`;
}

export function getActionStyle(px: number, py: number, rounded: ActionRounded, backgroundColor: ButtonBackgroundColor) {
	return {
		paddingInline: `${px}px`,
		paddingBlock: `${py}px`,
		borderRadius: getBorderRadiusValue(rounded),
		backgroundColor: colors.background[backgroundColor],
	};
}
