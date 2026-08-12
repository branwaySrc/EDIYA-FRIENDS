import { SubPageShell } from "@/app/_components/sub-page-shell";

export default function BrandPage() {
	return (
		<SubPageShell
			badge="Story"
			title="이디야 프렌즈 스토리"
			description="안산 지역 매장 운영 경험을 바탕으로, 기업과 단체가 필요한 순간에 믿고 맡길 수 있는 비즈니스 파트너가 되겠습니다."
			points={["지역 매장 기반의 빠른 대응", "실제 운영 노하우를 담은 제안", "행사 목적과 예산에 맞춘 구성"]}
		/>
	);
}
