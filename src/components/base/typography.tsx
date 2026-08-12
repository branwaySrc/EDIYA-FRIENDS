import { ElementType, ReactNode } from "react";

import { colors, TextColor } from "@/constants/colors";

type FontWeight = "regular" | "bold";

type BaseTypographyProps<T extends ElementType> = {
	as?: T;
	children?: ReactNode;
	className?: string;
	TextColor?: TextColor;
	weight?: FontWeight;
};

type TypographyProps<T extends ElementType> = BaseTypographyProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseTypographyProps<T>>;

const fontWeightClassName: Record<FontWeight, string> = {
	regular: "font-normal",
	bold: "font-bold",
};

export const textSizeStyle = {
	xs: "text-[13px] leading-[1.42] tracking-[-0.02em]",
	sm: "text-[16px] leading-[1.42] tracking-[-0.04em]",
	base: "text-[19px] leading-[1.42] tracking-[-0.04em]",
	lg: "text-[24px] leading-[1.32] tracking-[-0.04em]",
} as const;

const headingSizeClassName = {
	sm: "text-[24px] leading-[1.22] tracking-[-0.05em]",
	base: "text-[32px] leading-[1.14] tracking-[-0.05em]",
	lg: "text-[42px] leading-[1.08] tracking-[-0.05em]",
} as const;

function Typography<T extends ElementType>({
	as,
	children,
	className,
	TextColor = "default",
	weight = "regular",
	style,
	...props
}: TypographyProps<T>) {
	const Component = as ?? "p";
	const mergedClassName = [className, fontWeightClassName[weight]].filter(Boolean).join(" ");

	return (
		<Component className={mergedClassName} style={{ color: colors.text[TextColor], ...style }} {...props}>
			{children}
		</Component>
	);
}

function createTextVariant(size: keyof typeof textSizeStyle) {
	return function TextVariant<T extends ElementType = "p">(props: TypographyProps<T>) {
		const { className, ...restProps } = props;

		return <Typography<T> {...(restProps as TypographyProps<T>)} className={[textSizeStyle[size], className].filter(Boolean).join(" ")} />;
	};
}

function createHeadingVariant(size: keyof typeof headingSizeClassName) {
	return function HeadingVariant<T extends ElementType = "h2">({ weight = "bold", className, ...props }: TypographyProps<T>) {
		return (
			<Typography<T>
				{...(props as TypographyProps<T>)}
				className={[headingSizeClassName[size], className].filter(Boolean).join(" ")}
				weight={weight}
			/>
		);
	};
}

const textVariants = {
	xs: createTextVariant("xs"),
	sm: createTextVariant("sm"),
	base: createTextVariant("base"),
	lg: createTextVariant("lg"),
};

const headingVariants = {
	sm: createHeadingVariant("sm"),
	base: createHeadingVariant("base"),
	lg: createHeadingVariant("lg"),
};

export const Text = {
	...textVariants,
	Xs: textVariants.xs,
	Sm: textVariants.sm,
	Base: textVariants.base,
	Lg: textVariants.lg,
};

export const Heading = {
	...headingVariants,
	Sm: headingVariants.sm,
	Base: headingVariants.base,
	Lg: headingVariants.lg,
};
