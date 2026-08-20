import { waitForRouteLoadingPreview } from "@/app/_components/loading-delay";
import { PageHero } from "@/app/_components/Page-Hero";
import { Text } from "@/components/base/typography";

const privacyRows = [
	{
		label: "수집항목",
		value: "고객명, 전화번호",
	},
	{
		label: "목적",
		value: "이디야 제품 및 서비스 상담 안내",
	},
	{
		label: "이용 및 보관기간",
		value: "수집된 개인정보는 상담신청 후 6개월 보관/이용 후 파기",
		emphasis: true,
	},
];

export default async function PrivacyPolicyPage() {
	await waitForRouteLoadingPreview();

	return (
		<main className="bg-white">
			<PageHero
				src="/typos/PrivacyPolicy.svg"
				alt="ediya-privacy-image"
				title="개인정보 수집 및 이용 동의"
				className="max-w-76"
				description="상담 및 정보전달 목적을 위해 사용됩니다."
			/>

			<section className="px-4 py-24">
				<div className="mx-auto flex w-full max-w-[1040px] flex-col items-center">
					<div className="w-full bg-[#F3F3F3] px-4 py-10 md:px-12">
						<div className="mx-auto hidden w-full max-w-[856px] md:block">
							<table className="w-full border-collapse bg-white text-center">
								<thead>
									<tr>
										{privacyRows.map(row => (
											<th className="border-r border-white bg-[#666666] px-5 py-4 last:border-r-0" scope="col" key={row.label}>
												<Text.sm as="span" TextColor="white" weight="bold">
													{row.label}
												</Text.sm>
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr>
										{privacyRows.map(row => (
											<td className="border-r border-[#E5E5E5] px-5 py-7 align-middle last:border-r-0" key={row.label}>
												<Text.sm
													as="span"
													TextColor={row.emphasis ? "primary" : "default"}
													weight="bold"
													className={row.emphasis ? "text-[#FF4B4B]" : ""}
													style={row.emphasis ? { color: "#FF4B4B" } : undefined}
												>
													{row.value}
												</Text.sm>
											</td>
										))}
									</tr>
								</tbody>
							</table>
						</div>

						<div className="mx-auto flex w-full max-w-[856px] flex-col gap-3 md:hidden">
							{privacyRows.map(row => (
								<article className="overflow-hidden rounded-lg bg-white" key={row.label}>
									<div className="bg-[#666666] px-5 py-3">
										<Text.sm as="h2" TextColor="white" weight="bold">
											{row.label}
										</Text.sm>
									</div>
									<div className="px-5 py-5">
										<Text.sm TextColor={row.emphasis ? "primary" : "default"} weight="bold" style={row.emphasis ? { color: "#FF4B4B" } : undefined}>
											{row.value}
										</Text.sm>
									</div>
								</article>
							))}
						</div>

						<ul className="mx-auto mt-6 flex w-full max-w-[856px] list-disc flex-col gap-1 pl-5">
							<li>
								<Text.sm as="span" TextColor="sub">
									개인정보의 수집에 대한 동의를 거부할 권리가 있습니다.
								</Text.sm>
							</li>
							<li>
								<Text.sm as="span" TextColor="sub">
									다만, 개인정보 수집·이용에 동의하지 않을 경우 상담 서비스 제공이 제한됩니다.
								</Text.sm>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}
