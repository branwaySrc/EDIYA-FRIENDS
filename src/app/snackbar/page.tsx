import { waitForRouteLoadingPreview } from "@/app/_components/loading-delay";
import { PageHero } from "@/app/_components/Page-Hero";
import { Action } from "@/components/base/actions/actions";
import { Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

const points = ["공간에 맞춘 스낵바 구성", "RTD 음료와 스낵 라인업 제안", "정기 운영을 위한 안정적인 공급"];

export default async function SnackBarPage() {
	await waitForRouteLoadingPreview();

	return (
		<main className="bg-white">
			<PageHero
				src="/typos/SnackBar.svg"
				alt="snackbar-image"
				className="max-w-66"
				title="프라이빗 스낵바"
				description="비즈니스에 프라이빗한 스낵바를 제공합니다."
			/>

			<section className="px-4 py-20">
				<div className="mx-auto grid w-full max-w-[1100px] gap-4 md:grid-cols-3">
					{points.map(point => (
						<article className="rounded-lg border border-[#DDE4F0] bg-[#F8FAFC] p-6" key={point}>
							<Text.sm TextColor="default" weight="bold">
								{point}
							</Text.sm>
						</article>
					))}
				</div>
			</section>

			<section className="px-4 pb-24">
				<div className="mx-auto flex w-full max-w-[1100px] justify-center">
					<Action.Link href="/contact" rounded="full" px={26} py={12} style={{ backgroundColor: ediyaBlue }}>
						<Action.Text label="문의하기" TextColor="white" weight="bold" />
						<Action.Icon icon="arrow-right" size="sm" color="#FFFFFF" />
					</Action.Link>
				</div>
			</section>
		</main>
	);
}
