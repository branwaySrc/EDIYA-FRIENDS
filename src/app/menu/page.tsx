import { SubPageShell } from "@/app/_components/sub-page-shell";

export default function MenuPage() {
	return (
		<SubPageShell
			badge="Catering"
			title="커피 케이터링"
			description="회의, 세미나, 사내 행사에 맞춰 이디야 커피 메뉴와 간식을 안정적으로 구성합니다."
			points={["인원과 예산에 맞춘 메뉴 구성", "행사 성격에 어울리는 음료 제안", "대량 주문과 현장 준비 지원"]}
		/>
	);
}
