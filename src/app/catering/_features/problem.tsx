import { Badge } from "@/components/base/badge";
import { Heading, Text } from "@/components/base/typography";

export function Problem() {
	return (
		<section className="bg-white px-4 py-24 md:py-32">
			<div className="mx-auto flex w-full max-w-[960px] flex-col items-center text-center">
				<Badge backgroundColor="#E3EAF1" TextColor="sub" rounded={8} px={24} py={10} weight="bold">
					Problem
				</Badge>
				<article className="max-w-[920px] flex flex-col gap-2 mt-10">
					<Heading.lg as="h2" TextColor="default" weight="bold">
						행사 케이터링은
					</Heading.lg>
					<Heading.lg as="h2" TextColor="default" weight="bold">
						비즈니스의 품격을 담당합니다.
					</Heading.lg>
				</article>

				<div className="mt-9 flex max-w-[760px] flex-col gap-3">
					<Text.base TextColor="sub">행사 케이터링은 비즈니스의 격과 세심함을 보여주는 얼굴입니다.</Text.base>
					<Text.base TextColor="sub">하지만, 비싼 비용을 들인 케이터링엔 출처가 불명확한 저렴한 구성들이 자주 목격됩니다.</Text.base>
					<Text.base TextColor="sub">어렵게 준비한 행사 품격이, 케이터링으로 인해 저평가가 되서는 안됩니다.</Text.base>
				</div>
			</div>
		</section>
	);
}
