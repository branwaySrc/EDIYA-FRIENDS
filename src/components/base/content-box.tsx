import { CSSProperties, ReactNode } from "react";

type ContentBoxProps = {
	children?: ReactNode;
	className?: string;
	backgroundColor?: string;
	borderColor?: string;
	borderWidth?: number;
	px?: number;
	py?: number;
	rounded?: number | "full";
	style?: CSSProperties;
};

function getRoundedValue(rounded: ContentBoxProps["rounded"]) {
	if (rounded === "full") {
		return "9999px";
	}

	return `${rounded ?? 18}px`;
}

export function ContentBox({
	children,
	className,
	backgroundColor = "#FFFFFF",
	borderColor = "transparent",
	borderWidth = 0,
	px = 32,
	py = 32,
	rounded = 18,
	style,
}: ContentBoxProps) {
	return (
		<div
			className={className}
			style={{
				backgroundColor,
				borderColor,
				borderRadius: getRoundedValue(rounded),
				borderStyle: "solid",
				borderWidth,
				paddingInline: px,
				paddingBlock: py,
				...style,
			}}
		>
			{children}
		</div>
	);
}
