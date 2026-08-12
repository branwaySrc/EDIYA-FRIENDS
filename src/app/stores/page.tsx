import { SubPageShell } from "@/app/_components/sub-page-shell";

export default function StoresPage() {
	return (
		<SubPageShell
			badge="Snack Bar"
			title="프라이빗 스낵바"
			description="오피스, 라운지, 대기 공간에 어울리는 음료와 스낵 구성을 정기적으로 준비합니다."
			points={["공간에 맞춘 스낵바 구성", "RTD 음료와 스낵 라인업 제안", "정기 운영을 위한 안정적인 공급"]}
		/>
	);
}
