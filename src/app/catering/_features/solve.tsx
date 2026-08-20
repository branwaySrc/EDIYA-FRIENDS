import { Badge } from "@/components/base/badge";
import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

export function Solve() {
	return (
		<section className="bg-[#F8FAFC] px-4 py-24 md:py-32">
			<div className="mx-auto flex w-full max-w-[960px] flex-col items-center text-center">
				<Badge backgroundColor="#E3EAF1" TextColor="sub" rounded={8} px={24} py={10} weight="bold">
					How to Solve
				</Badge>
				<article className="mt-12 flex flex-col gap-2">
					<Text.lg TextColor="sub" className="max-w-[800px]">
						<strong>투명한 가격과 검증된 품질.</strong>
					</Text.lg>
					<Text.lg TextColor="sub" className="max-w-[800px]">
						프리미엄 브랜드로 비즈니스의 인상을 더 깊게 만드는 것.
					</Text.lg>
				</article>

				<span className="my-12 h-28 w-px bg-[#B7C0CC]" aria-hidden="true" />

				<Heading.lg as="h2" TextColor="default" weight="bold" className="max-w-[900px]">
					<span style={{ color: ediyaBlue }}>행사의 품격을 높이는</span> 스마트한 케이터링
				</Heading.lg>
				<article className="flex flex-col gap-2 mt-10">
					<Text.base TextColor="sub" className="max-w-[760px]">
						프리미엄 원두와 커피에 가장 잘 어울리는 스낵 구성,
					</Text.base>
					<Text.base TextColor="sub" className="max-w-[760px]">
						그리고 모두가 아는 이디야 커피의 자신있는 아이덴티티로
					</Text.base>
					<Text.base TextColor="sub" className="max-w-[760px]">
						<strong>행사의 준비성과 세심함을 표현하세요.</strong>
					</Text.base>
				</article>
			</div>
		</section>
	);
}
