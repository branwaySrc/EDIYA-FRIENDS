"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Action } from "@/components/base/actions/actions";

const GNB_LINKS = [
	{ label: "스토리", href: "/story" },
	{ label: "케이터링", href: "/catering" },
	{ label: "스낵바", href: "/snackbar" },
	{ label: "시즌 기프트", href: "/gift" },
	{ label: "FAQ", href: "/faq" },
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isDynamic = type === "dynamic";
	const isActiveScrolled = isDynamic && isScrolled;
	const textColor = isDynamic && !isScrolled ? "white" : "default";
	const iconColor = isDynamic && !isScrolled ? "#FFFFFF" : "#222222";
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

	useEffect(() => {
		if (!isMobileMenuOpen) {
			return;
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsMobileMenuOpen(false);
			}
		}

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMobileMenuOpen]);

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
			<div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
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

				<div className="hidden justify-self-end lg:block">
					<Action.Link href="/service-introduction" backgroundColor="buttonDefault" rounded={10} px={20} py={12}>
						<Action.Text TextColor="primary" label="소개서 다운로드" />
					</Action.Link>
				</div>

				<div className="justify-self-end lg:hidden">
					<Action.Button
						px={10}
						py={10}
						rounded={999}
						style={{ backgroundColor: "transparent" }}
						aria-label="모바일 메뉴 열기"
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-gnb"
						onClick={() => setIsMobileMenuOpen(true)}
					>
						<Menu color={iconColor} size={26} strokeWidth={2.4} aria-hidden="true" />
					</Action.Button>
				</div>
			</div>

			{isMobileMenuOpen ? (
				<div id="mobile-gnb" className="fixed inset-0 z-[60] bg-white px-5 py-6 lg:hidden" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
					<div className="mx-auto flex h-full w-full max-w-[520px] flex-col">
						<div className="flex items-center justify-between">
							<Action.Link
								href="/"
								px={0}
								py={0}
								rounded={0}
								style={transparentLinkStyle}
								aria-label="EDIYA MATES home"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Image src="/logo.svg" alt="EDIYA MATES" width={1497} height={343} className="h-4.5 w-auto" priority />
							</Action.Link>

							<Action.Button
								px={10}
								py={10}
								rounded={999}
								style={{ backgroundColor: "transparent" }}
								aria-label="모바일 메뉴 닫기"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<X color="#222222" size={28} strokeWidth={2.2} aria-hidden="true" />
							</Action.Button>
						</div>

						<nav className="mt-14 flex flex-1 flex-col" aria-label="Mobile navigation">
							<div className="flex flex-col divide-y divide-[#E6F0FA]">
								{GNB_LINKS.map(link => (
									<Action.Link
										key={link.href}
										href={link.href}
										px={0}
										py={18}
										rounded={0}
										style={transparentLinkStyle}
										className="justify-between"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<Action.Text label={link.label} TextColor="default" weight="bold" size="lg" />
										<Action.Icon icon="arrow-right" size="base" color="#1B2E74" />
									</Action.Link>
								))}
							</div>

							<div className="mt-auto pb-5">
								<Action.Link
									href="/service-introduction"
									backgroundColor="buttonDefault"
									rounded={10}
									px={20}
									py={15}
									className="w-full"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<Action.Text TextColor="primary" label="소개서 다운로드" weight="bold" />
									<Action.Icon icon="arrow-right" size="sm" color="#1B2E74" />
								</Action.Link>
							</div>
						</nav>
					</div>
				</div>
			) : null}
		</header>
	);
}
