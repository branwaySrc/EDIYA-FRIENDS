import { SubPageShell } from "@/app/_components/sub-page-shell";

export default function FaqPage() {
	return (
		<SubPageShell
			badge="FAQ"
			title="자주 묻는 질문"
			description="케이터링, 스낵바, 시즌 기프트 준비 전 자주 확인하는 내용을 한눈에 정리합니다."
			points={["최소 주문 수량과 상담 방식", "배송 및 준비 가능 지역", "견적과 구성 확정 절차"]}
		/>
	);
}
