import Image from "next/image";

import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";
import { Badge } from "@/components/base/badge";

const solutionPoints = [
	{
		title: "검증된 커피 퀄리티",
		description: "국내 대표 커피 브랜드의 노하우로 뛰어난 맛과 향의 고품질 커피를 제공합니다.",
	},
	{
		title: "합리적인 비용 구조",
		description: "유통 및 세팅 거품을 줄여, 동일한 예산으로도 훨씬 높은 품질의 스낵바를 구성합니다.",
	},
	{
		title: "정성스러운 기프트 패키징",
		description: "받자마자 대접받는 느낌을 주는 감각적인 패키지로 비즈니스 품격을 완성합니다.",
	},
];

export function Solution() {
	return (
		<section className="bg-white px-4 py-24 md:py-32">
			<div className="mx-auto flex w-full max-w-[1100px] flex-col gap-14 items-center">
				<Badge backgroundColor="#E3EAF1" TextColor="sub" rounded={8} px={24} py={10} weight="bold">
					Why Us?
				</Badge>
				<div className="text-center">
					<Heading.lg as="h2" TextColor="default" weight="bold">
						이디야 프렌즈의 케이터링 혜택!
					</Heading.lg>
				</div>
				<span className="my-6 h-28 w-px bg-[#B7C0CC]" aria-hidden="true" />
				<section className="text-center">
					<Badge backgroundColor={ediyaBlue} TextColor="white" rounded={99} px={20} py={10} weight="bold">
						01
					</Badge>
					<article className="flex flex-col gap-2 mt-10">
						<Heading.lg as="h2" TextColor="default" weight="bold">
							부족함이 없도록
						</Heading.lg>
						<Heading.lg as="h2" TextColor="default" weight="bold">
							<span style={{ color: ediyaBlue }}>20% 더 준비합니다.</span>
						</Heading.lg>
					</article>
					<Text.base TextColor="sub" className="mx-auto mt-6 max-w-[760px]">
						이디야 프렌즈는 주문 수량의 20%를 무상 지원합니다.
					</Text.base>
				</section>
				<div className="relative min-h-[320px] overflow-hidden rounded-lg md:min-h-[430px]">
					<Image
						src="/imgs/meeting-coffee-ediya.png"
						alt="비즈니스 미팅 테이블 위 이디야 커피"
						width={300}
						height={300}
						className="object-cover h-100 w-auto"
					/>
				</div>

				<section className="text-center mt-10">
					<Badge backgroundColor={ediyaBlue} TextColor="white" rounded={99} px={20} py={10} weight="bold">
						02
					</Badge>
					<article className="flex flex-col gap-2 mt-10">
						<Heading.lg as="h2" TextColor="default" weight="bold">
							부족함이 없도록
						</Heading.lg>
						<Heading.lg as="h2" TextColor="default" weight="bold">
							<span style={{ color: ediyaBlue }}>20% 더 준비합니다.</span>
						</Heading.lg>
					</article>
					<Text.base TextColor="sub" className="mx-auto mt-6 max-w-[760px]">
						이디야 프렌즈는 주문 수량의 20%를 무상 지원합니다.
					</Text.base>
				</section>
				<div className="relative min-h-[320px] overflow-hidden rounded-lg md:min-h-[430px]">
					<Image
						src="/imgs/meeting-coffee-ediya.png"
						alt="비즈니스 미팅 테이블 위 이디야 커피"
						width={300}
						height={300}
						className="object-cover h-100 w-auto"
					/>
				</div>

				<section className="text-center mt-10">
					<Badge backgroundColor={ediyaBlue} TextColor="white" rounded={99} px={20} py={10} weight="bold">
						03
					</Badge>
					<article className="flex flex-col gap-2 mt-10">
						<Heading.lg as="h2" TextColor="default" weight="bold">
							부족함이 없도록
						</Heading.lg>
						<Heading.lg as="h2" TextColor="default" weight="bold">
							<span style={{ color: ediyaBlue }}>20% 더 준비합니다.</span>
						</Heading.lg>
					</article>
					<Text.base TextColor="sub" className="mx-auto mt-6 max-w-[760px]">
						이디야 프렌즈는 주문 수량의 20%를 무상 지원합니다.
					</Text.base>
				</section>
				<div className="relative min-h-[320px] overflow-hidden rounded-lg md:min-h-[430px]">
					<Image
						src="/imgs/meeting-coffee-ediya.png"
						alt="비즈니스 미팅 테이블 위 이디야 커피"
						width={300}
						height={300}
						className="object-cover h-100 w-auto"
					/>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{solutionPoints.map((point, index) => (
						<article className="rounded-lg border border-[#DDE4F0] bg-[#F8FAFC] p-7" key={point.title}>
							<Text.sm TextColor="primary" weight="bold">
								{String(index + 1).padStart(2, "0")}
							</Text.sm>
							<Heading.sm as="h3" TextColor="default" weight="bold" className="mt-5">
								{point.title}
							</Heading.sm>
							<Text.sm TextColor="sub" className="mt-4">
								{point.description}
							</Text.sm>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
