import { SubPageShell } from "@/app/_components/sub-page-shell";

export default function NewsPage() {
	return (
		<SubPageShell
			badge="Season Gift"
			title="시즌 기프트"
			description="직원 복지, 고객 감사, 행사 답례품까지 브랜드 톤과 목적에 맞는 선물 패키지를 제안합니다."
			points={["시즌별 선물 패키지 구성", "수량과 예산에 맞춘 제안", "감사와 환영의 메시지를 담은 선택"]}
		/>
	);
}
