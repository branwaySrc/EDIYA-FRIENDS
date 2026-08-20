import Image from "next/image";

import { Text } from "@/components/base/typography";

export function Footer() {
	return (
		<footer className="w-full border-t border-[#E6F0FA] bg-[#F8FAFC] px-4 py-16">
			<div className="mx-auto grid w-full max-w-[1100px] gap-5 lg:grid-cols-2">
				<div className="flex flex-col gap-5">
					<Image src="/logo.svg" alt="EDIYA FRIENDS" width={1497} height={343} className="h-5 w-auto self-start" />
					<section className="flex flex-col gap-1">
						<Text.sm TextColor="sub">본 이디야 프렌즈 서비스는</Text.sm>
						<Text.sm TextColor="sub">
							<strong className="font-bold text-[#222222]">이디야 안산 월피동점/동안산병원점</strong>이 운영하는 서비스입니다.
						</Text.sm>
					</section>
					<section className="flex flex-col gap-2">
						<Text.sm weight="bold">운영점 안내</Text.sm>
						<div className="flex flex-col gap-1">
							<Text.sm TextColor="sub">
								<strong className="font-bold text-[#222222]">이디야커피 안산 월피동점</strong> | 경기도 안산시 상록구 월피동 492-16번지 103호
							</Text.sm>
							<Text.sm TextColor="sub">
								<strong className="font-bold text-[#222222]">이디야커피 안산 동안산병원점</strong> | 경기도 안산시 상록구 월피동 474-11
							</Text.sm>
						</div>
					</section>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
					<div className="flex flex-col gap-2">
						<Text.sm weight="bold">문의</Text.sm>
						<div className="flex flex-col gap-1">
							<Text.sm TextColor="sub">contact@ediyafriends.kr</Text.sm>
							<Text.sm weight="bold">010-4514-7173 / 070-4171-7412</Text.sm>
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<Text.sm weight="bold">운영 사업자</Text.sm>
						<div className="grid gap-1">
							<Text.sm TextColor="sub">
								<strong className="font-bold text-[#222222]">대 표 자</strong> | 김 민 석
							</Text.sm>
							<Text.sm TextColor="sub">
								<strong className="font-bold text-[#222222]">사 업 장</strong> | 이디야커피 안산 동안산병원점
							</Text.sm>
							<Text.sm TextColor="sub">
								<strong className="font-bold text-[#222222]">사업자등록번호</strong> | 211-39-63056
							</Text.sm>
						</div>
					</div>

					<div className="flex flex-col gap-1">
						<Text.sm weight="bold">위탁 마케팅 · 사이트 운영</Text.sm>
						<div className="flex gap-2">
							<Text.sm TextColor="sub">브랜웨이(Branway)</Text.sm>
							<Text.sm TextColor="sub">개인정보 보호책임자: 김 민 기</Text.sm>
						</div>
					</div>

					<Text.sm TextColor="sub" className="pt-4">
						<strong className="font-bold text-[#222222]">©2026</strong> <strong className="font-bold text-[#222222]">EDIYA FRIENDS</strong>
					</Text.sm>
				</div>
			</div>
		</footer>
	);
}
