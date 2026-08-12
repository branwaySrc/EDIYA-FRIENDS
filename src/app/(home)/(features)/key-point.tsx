import Image from "next/image";
import { Check } from "lucide-react";

import { Action } from "@/components/base/actions/actions";
import { Heading, Text } from "@/components/base/typography";

const featurePoints = [
	"25년의 역사로 비즈니스 분위기를 품위있게",
	"전 연령대를 아우르는 브랜드 인지도",
	"어떤 규모도 수용 가능한 이디야만의 콜드체인",
];

const keyPointCards = [
	{
		title: "세계적인 수준의 로스팅",
		model: "EDIYA COFFEE",
		imageSrc: "/imgs/ediya-dream-factory.png",
		description: "25년간 이어온 EDIYA DREAM FACTORY의 최고급 원두와 품격있는 퀄리티",
	},
	{
		title: "커피에 가장 어울리는 라인업",
		model: "EDIYA LINE UP",
		imageSrc: "/imgs/bakery-transparent.png",
		description: "커피와 가장 잘 어울리는 스낵부터 베이커리 라인업과 보장된 품질",
	},
];

export function KeyPoint() {
	return (
		<section className="relative w-full overflow-hidden bg-[#181818] px-4 py-24 text-white md:py-32">
			<div
				className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_100%,rgba(27,46,116,0.42)_0%,rgba(27,46,116,0.18)_34%,rgba(24,24,24,0)_72%)]"
				aria-hidden="true"
			/>
			<div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-10">
				<div className="flex max-w-2xl flex-col items-center gap-3 text-center">
					<Heading.Lg as="h2" TextColor="white" weight="bold">
						이유있는 선택!
					</Heading.Lg>
					<Heading.Lg as="p" TextColor="white" weight="bold">
						품격있는 이디야의 검증된 퀄리티.
					</Heading.Lg>
				</div>

				<div className="grid w-full gap-3">
					<article className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/12 bg-[#101010] px-7 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:min-h-[360px] md:px-12 md:py-12">
						<div className="absolute inset-y-0 right-0 hidden w-[52%] md:block">
							<div className="relative h-full w-full overflow-hidden bg-[linear-gradient(90deg,rgba(16,16,16,0)_0%,rgba(255,255,255,0.06)_100%)]">
								<Image
									src="/imgs/ediya-uniform-bowing-staff.png"
									alt=""
									fill
									sizes="(min-width: 768px) 52vw, 100vw"
									className="object-contain object-right-bottom"
									aria-hidden="true"
								/>
								<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101010] via-[#101010]/70 to-transparent" aria-hidden="true" />
							</div>
						</div>
						<div className="relative z-10 flex max-w-sm flex-col gap-7">
							<div className="flex flex-col gap-1">
								<Heading.sm as="h3" TextColor="white" weight="bold">
									모든 연령대가
								</Heading.sm>
								<Heading.sm as="h3" weight="bold" style={{ color: "#3C89FD" }}>
									아는 품격있는 인지도
								</Heading.sm>
							</div>
							<ul className="flex flex-col gap-3">
								{featurePoints.map(point => (
									<li className="flex items-start gap-2" key={point}>
										<Check className="mt-0.5 shrink-0" color={"#3C89FD"} size={14} strokeWidth={3} aria-hidden="true" />
										<Text.sm as="span" TextColor="white">
											{point}
										</Text.sm>
									</li>
								))}
							</ul>
						</div>
						<div className="relative mt-8 h-36 w-full overflow-hidden md:hidden">
							<Image
								src="/imgs/ediya-uniform-bowing-staff.png"
								alt=""
								fill
								sizes="100vw"
								className="object-contain object-right-bottom"
								aria-hidden="true"
							/>
							<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101010] via-[#101010]/70 to-transparent" aria-hidden="true" />
						</div>
					</article>

					<div className="grid gap-3 md:grid-cols-2">
						{keyPointCards.map(card => (
							<article
								className="flex min-h-[330px] flex-col items-center justify-between rounded-lg border border-white/8 bg-[#292929] px-7 py-9 text-center"
								key={card.model}
							>
								<div className="relative h-36 w-full overflow-hidden">
									<Image
										src={card.imageSrc}
										alt=""
										fill
										sizes="(min-width: 780px) 55vw, 100vw"
										className="object-contain"
										aria-hidden="true"
									/>
									<div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#292929] via-[#292929] to-transparent" aria-hidden="true" />
								</div>
								<div className="flex flex-col items-center gap-2">
									<Heading.sm as="h3" TextColor="white" weight="bold">
										{card.title}
									</Heading.sm>
									<Text.xs weight="bold" style={{ color: "#3C89FD" }}>
										{card.model}
									</Text.xs>
									<Text.xs TextColor="white" className="max-w-[240px] opacity-80">
										{card.description}
									</Text.xs>
								</div>
							</article>
						))}
					</div>
				</div>

				<Action.Link href="/contact" rounded="full" backgroundColor="buttonDefault" px={24} py={10}>
					<Action.Text label="지금 바로 문의하기" weight="bold" />
				</Action.Link>
			</div>
		</section>
	);
}
