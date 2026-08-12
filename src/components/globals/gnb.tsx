"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Action } from "@/components/base/actions/actions";

const GNB_LINKS = [
	{ label: "스토리", href: "/brand" },
	{ label: "케이터링", href: "/menu" },
	{ label: "스낵바", href: "/stores" },
	{ label: "시즌 기프트", href: "/news" },
	{ label: "FAQ", href: "/ness" },
] as const;

const transparentLinkStyle = {
	backgroundColor: "transparent",
} as const;

type GnbType = "dynamic" | "idle";

type GnbProps = {
	type?: GnbType;
};

export function Gnb({ type = "dynamic" }: GnbProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const isDynamic = type === "dynamic";
	const isActiveScrolled = isDynamic && isScrolled;
	const textColor = isDynamic && !isScrolled ? "white" : "default";
	const logoSrc = isDynamic && !isScrolled ? "/logo__.svg" : "/logo.svg";

	useEffect(() => {
		if (!isDynamic) {
			return;
		}

		function handleScroll() {
			setIsScrolled(window.scrollY > 8);
		}

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isDynamic]);

	return (
		<header
			className={[
				"fixed left-0 top-0 z-50 flex h-20 w-full items-center transition-colors duration-300",
				isActiveScrolled || !isDynamic ? "shadow-[0_1px_0_rgba(15,23,42,0.08)]" : "",
			]
				.filter(Boolean)
				.join(" ")}
			style={{
				background: isActiveScrolled || !isDynamic ? "#FFFFFF" : "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 100%)",
			}}
		>
			<div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-4">
				<Action.Link
					href="/"
					px={0}
					py={0}
					rounded={0}
					style={transparentLinkStyle}
					className="justify-self-start hover:opacity-80"
					aria-label="EDIYA MATES home"
				>
					<Image src={logoSrc} alt="EDIYA MATES" width={1497} height={343} className="h-4.5 w-auto transition-opacity duration-300" priority />
				</Action.Link>

				<nav className="hidden items-center gap-14 lg:flex" aria-label="Primary navigation">
					{GNB_LINKS.map(link => (
						<Action.Link key={link.href} href={link.href} px={0} py={0} rounded={0} hoverLine style={transparentLinkStyle}>
							<Action.Text label={link.label} TextColor={textColor} weight="bold" />
						</Action.Link>
					))}
				</nav>

				<div className="justify-self-end">
					<Action.Link href="/service-introduction" backgroundColor="buttonDefault" rounded={10} px={20} py={12}>
						<Action.Text TextColor="primary" label="소개서 다운로드" />
					</Action.Link>
				</div>
			</div>
		</header>
	);
}
