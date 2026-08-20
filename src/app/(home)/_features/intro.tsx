import Image from "next/image";

import { Action } from "@/components/base/actions/actions";
import { Badge } from "@/components/base/badge";
import { ContentBox } from "@/components/base/content-box";
import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

import { badgeSize, contentBoxSize, homeContainerClassName } from "./shared";

const HERO_WELCOME_WORDS = ["복잡한 커피 케이터링", "어려운 프라이빗 스낵바", "버거운 기프트 준비"];

function DetailAction({ href, isLight = false, color = "#fff" }: { href: string; isLight?: boolean; color?: string }) {
	return (
		<Action.Link href={href} px={20} py={10} rounded={99} style={{ backgroundColor: "#FFFFFF" }}>
			<span className="transition-transform duration-300 hover:translate-x-1.5 flex items-center gap-1">
				<Action.Text label="자세히 보기" TextColor={isLight ? "white" : "default"} weight="regular" />
				<Action.Icon icon="arrow-right" size="base" color={color} />
			</span>
		</Action.Link>
	);
}

export function Intro({ words = HERO_WELCOME_WORDS }: { words?: string[] }) {
	const baseWords = words.length > 0 ? words : HERO_WELCOME_WORDS;
	const rollingWords = [...baseWords, baseWords[0]];

	return (
		<section className={`${homeContainerClassName} flex flex-col items-center gap-12 py-24`}>
			<div className="flex max-w-3xl flex-col items-center gap-10 pb-2 text-center">
				<Badge backgroundColor="#E6F0FA" color={ediyaBlue} rounded={badgeSize.rounded} px={badgeSize.px} weight="bold">
					서비스 소개
				</Badge>
				<div className="flex flex-col gap-3">
					<Heading.lg as="h2" TextColor="default" weight="bold" className="flex flex-wrap items-start justify-center gap-x-3">
						<span className="inline-flex h-[1.12em] overflow-hidden text-primary">
							<span className="flex animate-hero-welcome-slide flex-col">
								{rollingWords.map((word, index) => (
									<span className="block" key={`${word}-${index}`}>
										{word}
									</span>
								))}
							</span>
						</span>
					</Heading.lg>
					<Heading.lg as="h2" TextColor="default" weight="bold">
						이제, <span style={{ color: ediyaBlue }}>이디야 프렌즈</span>와 함께하세요!
					</Heading.lg>
				</div>
			</div>

			<div className="grid w-full gap-6 lg:grid-cols-[1fr_1fr]">
				<div className="flex flex-col gap-6">
					<ContentBox
						backgroundColor="#E6F0FA"
						rounded={contentBoxSize.rounded}
						px={contentBoxSize.px}
						py={contentBoxSize.py}
						className="relative flex min-h-[480px] flex-col overflow-hidden"
					>
						<Image
							src="/imgs/office-worker.png"
							alt=""
							aria-hidden="true"
							width={320}
							height={320}
							className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-[60%] max-w-[340px] object-contain"
							priority={false}
						/>
						<div className="relative z-10 flex max-w-[320px] flex-col gap-4">
							<Badge backgroundColor="rgba(27, 46, 116, 0.18)" TextColor="primary">
								케이터링 지원
							</Badge>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<Heading.sm as="h3" weight="bold">
										행사의 만족을 채우는
									</Heading.sm>
									<Heading.sm as="h3" weight="bold">
										이디야 프렌즈만의 케이터링
									</Heading.sm>
								</div>
								<Text.sm>
									갑작스러운 인원 추가에
									<br />
									부족하지 않도록 여유분 20%를
									<br />
									무상으로 지원합니다.
								</Text.sm>
							</div>
						</div>
						<div className="relative z-10 mt-auto flex justify-end pt-8">
							<DetailAction href="/service-introduction" color="#222" />
						</div>
					</ContentBox>

					<ContentBox
						backgroundColor="#EEF3FB"
						rounded={contentBoxSize.rounded}
						px={contentBoxSize.px}
						py={contentBoxSize.py}
						className="relative flex h-full min-h-[230px] flex-col overflow-hidden"
					>
						<div className="flex flex-col gap-4">
							<div className="flex flex-wrap items-center gap-2">
								<Text.sm as="span" TextColor="primary" weight="bold">
									⭐⭐⭐⭐⭐
								</Text.sm>
								<Text.sm as="span" TextColor="sub">
									4.91 (배달 플랫폼 3사 기준)
								</Text.sm>
							</div>
							<div className="flex flex-col gap-4">
								<Heading.sm as="h3" weight="bold">
									고객 만족으로 검증된 책임감
								</Heading.sm>
								<Text.sm>
									안산 지역 누적 매출과 리뷰 1위로 증명된 신뢰와 경험.
									<br />
									비즈니스에 대한 확실한 책임을 약속합니다.
								</Text.sm>
							</div>
						</div>
						<div className="mt-auto flex justify-end pt-6">
							<Action.Link href={""} px={0} py={0} rounded={0} style={{ backgroundColor: "transparent" }} className="opacity-90">
								<span className="transition-transform duration-300 hover:translate-x-1.5 flex items-center gap-1">
									<Action.Text label="소개서 다운로드" TextColor={"default"} weight="regular" />
									<Action.Icon icon="arrow-right" size="base" color={"#222222"} />
								</span>
							</Action.Link>
						</div>
					</ContentBox>
				</div>

				<div className="flex flex-col gap-6">
					<ContentBox
						backgroundColor={ediyaBlue}
						rounded={contentBoxSize.rounded}
						px={contentBoxSize.px}
						py={contentBoxSize.py}
						className="relative flex h-full min-h-[208px] flex-col overflow-hidden"
					>
						<Image
							src="/imgs/giftbox.png"
							alt=""
							aria-hidden="true"
							width={320}
							height={320}
							className="pointer-events-none absolute bottom-4 right-10 z-0 h-auto w-[65%] max-w-[150px] object-contain"
							priority={false}
						/>
						<div className="flex max-w-[330px] flex-col gap-4">
							<Badge backgroundColor="rgba(255,255,255,0.18)" TextColor="white">
								시즌 기프트
							</Badge>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<Heading.sm as="h3" weight="bold" TextColor="white">
										모두가 좋아하는 커피
									</Heading.sm>
									<Heading.sm as="h3" weight="bold" TextColor="white">
										이디야 MD 기프트로 해결!
									</Heading.sm>
								</div>
								<Text.sm TextColor="white" className="opacity-85">
									모든 연령대가 아는 브랜드 인지도로
									<br />
									기프트 완성도를 업그레이드 하세요.
								</Text.sm>
							</div>
						</div>
						<div className="mt-auto flex justify-end pt-6">
							<DetailAction href="/story" color="#222" />
						</div>
					</ContentBox>

					<ContentBox
						backgroundColor="#242525"
						rounded={contentBoxSize.rounded}
						px={contentBoxSize.px}
						py={contentBoxSize.py}
						className="relative flex h-full min-h-[392px] flex-col overflow-hidden"
					>
						<Image
							src="/imgs/meeting-coffee-ediya.png"
							alt=""
							aria-hidden="true"
							width={320}
							height={320}
							className="pointer-events-none absolute bottom-0 right-6 z-0 h-auto w-[65%] max-w-[260px] object-contain"
							priority={false}
						/>
						<div className="relative z-10 flex max-w-[360px] flex-col gap-4">
							<Badge backgroundColor="rgba(255,255,255,0.14)" TextColor="white">
								스낵바
							</Badge>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<Heading.sm as="h3" weight="bold" TextColor="white">
										임직원을 위한 스낵바
									</Heading.sm>
									<Heading.sm as="h3" weight="bold" TextColor="white">
										퀄리티와 만족도를 더욱 높게
									</Heading.sm>
								</div>
								<Text.sm TextColor="white" className="opacity-85">
									정기적인 프라이빗 스낵바 운영으로 휴식과
									<br />
									비즈니스 분위기를 디자인합니다.
								</Text.sm>
							</div>
						</div>
						<div className="relative z-10 mt-auto flex justify-end pt-8">
							<DetailAction href="/story" color="#222" />
						</div>
					</ContentBox>
				</div>
			</div>
		</section>
	);
}
