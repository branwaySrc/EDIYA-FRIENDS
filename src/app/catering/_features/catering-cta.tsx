import { Action } from "@/components/base/actions/actions";
import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

export function CateringCta() {
	return (
		<section className="bg-[#111E3A] px-4 py-24 text-white md:py-28">
			<div className="mx-auto flex w-full max-w-[960px] flex-col items-center text-center">
				<Heading.lg as="h2" TextColor="white" weight="bold">
					비즈니스의 격을 높이는 가장 스마트한 선택, 이디야 프렌즈
				</Heading.lg>

				<Text.base TextColor="white" className="mt-6 max-w-[720px] opacity-85">
					비싼 가격에 타협했던 저렴한 커피 대신, 진짜 퀄리티로 브랜드의 기억을 바꾸세요. 지금 이디야 프렌즈 맞춤 견적 및 상담을 신청해
					보세요.
				</Text.base>

				<Action.Link href="#catering-consultation" rounded="full" px={28} py={13} className="mt-9" style={{ backgroundColor: "#FFFFFF" }}>
					<Action.Text label="맞춤 상담 신청하기" TextColor="primary" weight="bold" />
					<Action.Icon icon="arrow-right" size="sm" color={ediyaBlue} />
				</Action.Link>
			</div>
		</section>
	);
}
