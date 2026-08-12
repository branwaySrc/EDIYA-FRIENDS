import { CSSProperties, ReactNode } from "react";

import { TextColor } from "@/constants/colors";

import { Text } from "./typography";

type BadgeProps = {
	children?: ReactNode;
	backgroundColor?: string;
	className?: string;
	color?: string;
	px?: number;
	py?: number;
	rounded?: number;
	style?: CSSProperties;
	TextColor?: TextColor;
	weight?: "regular" | "bold";
};

export function Badge({
	children,
	backgroundColor = "#F1F5F9",
	className,
	color,
	px = 12,
	py = 6,
	rounded = 6,
	style,
	TextColor = "default",
	weight = "regular",
}: BadgeProps) {
	return (
		<span
			className={["inline-flex w-fit items-center justify-center", className].filter(Boolean).join(" ")}
			style={{
				backgroundColor,
				borderRadius: `${rounded}px`,
				paddingInline: px,
				paddingBlock: py,
				...style,
			}}
		>
			<Text.xs as="span" TextColor={TextColor} weight={weight} style={color ? { color } : undefined}>
				{children}
			</Text.xs>
		</span>
	);
}
