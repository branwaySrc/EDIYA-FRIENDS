import { SubPageShell } from "@/app/_components/sub-page-shell";

export default function ServiceIntroductionPage() {
	return (
		<SubPageShell
			badge="Download"
			title="소개서 다운로드"
			description="이디야 프렌즈의 서비스 구성과 운영 방식을 소개서로 확인할 수 있습니다."
			points={["커피 케이터링 소개", "프라이빗 스낵바 운영 안내", "시즌 기프트 구성 예시"]}
		/>
	);
}
