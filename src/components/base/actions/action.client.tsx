"use client";

import { ButtonHTMLAttributes } from "react";

import { ActionBaseProps, getActionClassName, getActionStyle } from "./action.shared";

export type ActionButtonProps = ActionBaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ActionBaseProps>;

export function ActionButton({
	children,
	className,
	px = 16,
	py = 8,
	rounded = 10,
	backgroundColor = "buttonDefault",
	style,
	type = "button",
	...props
}: ActionButtonProps) {
	return (
		<button
			type={type}
			className={getActionClassName(className)}
			style={{ ...getActionStyle(px, py, rounded, backgroundColor), ...style }}
			{...props}
		>
			{children}
		</button>
	);
}
