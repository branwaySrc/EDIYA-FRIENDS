import Image from "next/image";

import { Action } from "@/components/base/actions/actions";
import { Heading, Text } from "@/components/base/typography";

const caseCards = [
	{
		brand: "EDIYA Coffee Catering",
		name: "커피 케이터링",
		title: "케이터링 카달로그 다운로드",
		description: "케이터링이 가능한 메뉴를 카달로그로 확인하세요.",
		cardBackground: "linear-gradient(135deg, #17265F 0%, #1B2E74 58%, #3157B7 100%)",
		catalogueUrl: "#",
		featured: true,
	},
	{
		brand: "Private Snack Bar",
		name: "프라이빗 스낵바",
		title: "프라이빗 스낵바 카달로그 다운로드",
		description: "사무실, 라운지, 대기 공간에 맞춰 음료와 간식을 보기 좋고 이용하기 쉬운 형태로 준비합니다.",
		cardBackground: "linear-gradient(135deg, #0F4EA8 0%, #1971E5 56%, #78B7FF 100%)",
		catalogueUrl: "#",
	},
	{
		brand: "Gift Package",
		name: "시즌 기프트 준비",
		title: "시즌 기프트 카달로그 다운로드",
		description: "직원 복지, 고객 감사, 행사 답례품까지 필요한 예산과 수량에 맞춰 패키지 구성을 제안합니다.",
		cardBackground: "linear-gradient(135deg, #0B5278 0%, #147DB8 56%, #65C9F4 100%)",
		catalogueUrl: "#",
	},
];

function HeaderImage() {
	return (
		<div className="relative min-h-[220px] w-full overflow-hidden rounded-lg ">
			<Image
				src={"/imgs/catalogue.svg"}
				alt="Ediya-friends-catalgue"
				fill
				sizes="(min-width: 768px) 420px, 100vw"
				className="object-contain"
				unoptimized
				aria-hidden="true"
			/>
		</div>
	);
}

function CaseCard({ card }: { card: (typeof caseCards)[number] }) {
	const isExternalCatalogueUrl = card.catalogueUrl.startsWith("http");

	return (
		<article
			className={[
				"flex rounded-lg border border-white/20 p-7 shadow-[0_18px_70px_rgba(27,46,116,0.08)]",
				card.featured ? "min-h-[410px] flex-col justify-between md:row-span-2" : "min-h-[190px] flex-col justify-between gap-8",
			].join(" ")}
			style={{ background: card.cardBackground }}
		>
			<div className="flex flex-col gap-5">
				<Heading.sm as="h3" TextColor="white" weight="bold">
					{card.brand}
				</Heading.sm>
				<div className="flex flex-col gap-3">
					<Text.sm as="h3" TextColor="white" weight="bold">
						{card.title}
					</Text.sm>
					{card.featured ? (
						<Text.sm TextColor="white" className="opacity-85">
							{card.description}
						</Text.sm>
					) : null}
				</div>
			</div>

			<div className="flex items-end justify-between gap-4">
				<Text.xs as="span" TextColor="white" weight="bold">
					{card.name}
				</Text.xs>
				<Action.Link
					href={card.catalogueUrl}
					target={isExternalCatalogueUrl ? "_blank" : undefined}
					rel={isExternalCatalogueUrl ? "noopener noreferrer" : undefined}
					px={0}
					py={0}
					rounded={0}
					style={{ backgroundColor: "transparent" }}
					className="text-white underline underline-offset-4 transition-opacity hover:opacity-75"
					aria-label={`${card.name} 카달로그 다운로드`}
				>
					<Action.Text label="카달로그 다운로드" TextColor="white" weight="bold" size="sm" />
					<Action.Icon icon="arrow-right" size="sm" color="#FFFFFF" />
				</Action.Link>
			</div>
		</article>
	);
}

export function Beverage() {
	return (
		<section className="w-full bg-[#F6F8FB] px-4 py-24 md:py-32">
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
				<div className="grid items-center gap-10 md:grid-cols-[1fr_0.92fr]">
					<div className="flex flex-col gap-6">
						<article className="flex flex-col gap-2">
							<Heading.Lg as="h2" TextColor="default" weight="bold">
								다채로운 경험.
							</Heading.Lg>
							<Heading.Lg as="h2" TextColor="default" weight="bold">
								스테디셀러 등
							</Heading.Lg>
							<Heading.Lg as="h2" TextColor="default" weight="bold">
								탄탄한 라인업 구성.
							</Heading.Lg>
						</article>
						<Text.base TextColor="sub">
							비즈니스에 가장 잘 어울리는 퀄리티.
							<br className="hidden md:block" />
							이디야가 비즈니스의 품격을 끌어올리겠습니다.
						</Text.base>
					</div>
					<HeaderImage />
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					{caseCards.map(card => (
						<CaseCard card={card} key={card.name} />
					))}
				</div>

				<div className="flex justify-center">
					<Action.Link href="/reviews" rounded="full" backgroundColor="buttonDefault" px={30} py={12}>
						<Action.Text label="지금 바로 문의하기" weight="bold" />
					</Action.Link>
				</div>
			</div>
		</section>
	);
}
