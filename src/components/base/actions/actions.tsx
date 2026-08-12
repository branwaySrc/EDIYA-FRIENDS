import Link from "next/link";
import { icons, type LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";
import { colors, TextColor } from "@/constants/colors";
import { ActionButton } from "./action.client";
import { ActionBaseProps, ActionSize, getActionClassName, getActionStyle, iconSize, paddingSize } from "./action.shared";
import { Text } from "../typography";
import type { ActionButtonProps } from "./action.client";

type ActionIconName = string;

type ActionTextProps = {
	label: string;
	TextColor?: TextColor;
	weight?: "regular" | "bold";
	size?: ActionSize;
};

type ActionIconProps = {
	icon: ActionIconName;
	color?: string;
	size?: ActionSize;
};

type ActionLinkOwnProps = {
	hoverLine?: boolean;
};

type ActionLinkProps = ActionBaseProps &
	ActionLinkOwnProps &
	Omit<ComponentPropsWithoutRef<typeof Link>, keyof ActionBaseProps | keyof ActionLinkOwnProps>;

function ActionText({ label, TextColor = "default", size = "sm", weight = "regular" }: ActionTextProps) {
	const TextComponent = Text[size];

	return (
		<TextComponent as="span" TextColor={TextColor} weight={weight}>
			{label}
		</TextComponent>
	);
}

function toPascalCaseIconName(icon: string) {
	const normalizedIcon = icon === "chevlon-right" ? "chevron-right" : icon;

	return normalizedIcon
		.split("-")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
}

function ActionIcon({ icon, color = colors.text.default, size = "sm" }: ActionIconProps) {
	const resolvedSize = iconSize[size];
	const lucideIcons = icons as Record<string, LucideIcon>;
	const Icon = lucideIcons[icon] ?? lucideIcons[toPascalCaseIconName(icon)];

	if (!Icon) {
		return null;
	}

	return <Icon color={color} size={resolvedSize} strokeWidth={2} aria-hidden="true" />;
}

function ActionLink({
	children,
	className,
	px = 16,
	py = 8,
	rounded = 10,
	backgroundColor = "buttonDefault",
	hoverLine = false,
	style,
	...props
}: ActionLinkProps) {
	return (
		<Link
			className={getActionClassName(["relative", hoverLine ? "group" : "", className].filter(Boolean).join(" "))}
			style={{ ...getActionStyle(px, py, rounded, backgroundColor), ...style }}
			{...props}
		>
			{children}
			{hoverLine ? (
				<span
					aria-hidden="true"
					className="pointer-events-none absolute bottom-[-8px] left-1/2 h-[5px] w-0 -translate-x-1/2 rounded-full opacity-0 transition-[width,height,opacity] duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:h-[3px] group-hover:w-full group-hover:opacity-100"
					style={{ backgroundColor: colors.text.primary }}
				/>
			) : null}
		</Link>
	);
}

type ActionComponent = {
	Link: typeof ActionLink;
	Button: typeof ActionButton;
	Text: typeof ActionText;
	Icon: typeof ActionIcon;
	iconSize: typeof iconSize;
	paddingSize: typeof paddingSize;
};

export const Action = {
	Link: ActionLink,
	Button: ActionButton,
	Text: ActionText,
	Icon: ActionIcon,
	iconSize,
	paddingSize,
} satisfies ActionComponent;

export type { ActionButtonProps, ActionIconProps, ActionLinkProps, ActionTextProps };
