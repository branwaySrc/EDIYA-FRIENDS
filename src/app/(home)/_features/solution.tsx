import Image from "next/image";

import { Action } from "@/components/base/actions/actions";
import { Badge } from "@/components/base/badge";
import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";
import { badgeSize } from "./shared";

const solutions = [
	{
		title: "커피 케이터링",
		description: "이디야 커피 메뉴를 기반으로 인원과 예산에 맞는 음료와 간식 구성",
		tone: "bg-[#E6F0FA]",
		badge: "맞춤형 커피 케이터링",
		badgeColor: "#1B2E74",
		imageSrc: "/imgs/catering-menu.png",
		href: "/service-introduction",
	},
	{
		title: "프라이빗 스낵바",
		description: "비즈니스 공간에 어울리는 RTD 음료 및 스낵 라운지 운영",
		tone: "bg-[#EEF3FB]",
		badge: "정기적인 맞춤 스낵바",
		badgeColor: "#334053",
		imageSrc: "/imgs/snackbar-menu.png",
		href: "/service-introduction",
	},
	{
		title: "시즌 기프트",
		description: "직원 선물, 고객 감사품, 단체 패키지까지 브랜드 톤에 맞춰 구성",
		tone: "bg-[#F4F7FB]",
		badge: "단체 기프트 준비",
		badgeColor: "#0052BD",
		imageSrc: "/imgs/gift-menu.png",
		href: "/service-introduction",
	},
];

export function Solution() {
	return (
		<section className="w-full bg-white px-4 py-24 md:py-32">
			<div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12">
				<div className="flex max-w-3xl flex-col items-center gap-12 text-center">
					<Badge backgroundColor="#E6F0FA" color={ediyaBlue} rounded={badgeSize.rounded} px={badgeSize.px} py={badgeSize.py} weight="bold">
						비즈니스 솔루션
					</Badge>
					<div className="flex flex-col gap-2">
						<Heading.Lg as="h2" TextColor="default" weight="bold">
							필요할 때 바로 준비되는
						</Heading.Lg>
						<Heading.Lg as="p" TextColor="default" weight="bold">
							이디야 프렌즈의 <span style={{ color: ediyaBlue }}>3가지 서비스.</span>
						</Heading.Lg>
					</div>
				</div>

				<div className="grid w-full gap-4 md:grid-cols-3">
					{solutions.map(solution => (
						<article
							key={solution.title}
							className="overflow-hidden rounded-lg border border-[#DDE4F0] bg-white shadow-[0_18px_60px_rgba(27,46,116,0.08)]"
						>
							<div className={`relative h-[270px] overflow-hidden ${solution.tone}`}>
								<Image src={solution.imageSrc} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" aria-hidden="true" />
								<div
									className="absolute left-1/2 bottom-8 z-10 w-[74%] -translate-x-1/2 rounded-lg px-4 py-3 text-center shadow-[0_12px_30px_rgba(27,46,116,0.12)]"
									style={{ backgroundColor: solution.badgeColor }}
								>
									<Text.xs TextColor="white" weight="bold">
										{solution.badge}
									</Text.xs>
								</div>
							</div>
							<div className="flex min-h-[150px] flex-col justify-between gap-4 px-6 py-6">
								<div className="flex flex-col gap-2">
									<Text.Base as="h3" TextColor="default" weight="bold">
										{solution.title}
									</Text.Base>
									<Text.sm TextColor="sub">{solution.description}</Text.sm>
								</div>
								<div className="flex justify-end">
									<Action.Link
										href={solution.href}
										px={0}
										py={0}
										rounded={0}
										style={{ backgroundColor: "transparent" }}
										className="underline underline-offset-4 transition-opacity hover:opacity-70"
									>
										<Action.Text label="자세히보기" TextColor="primary" weight="bold" />
									</Action.Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
