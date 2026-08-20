import { waitForRouteLoadingPreview } from "@/app/_components/loading-delay";
import { PageHero } from "@/app/_components/Page-Hero";
import { Action } from "@/components/base/actions/actions";
import { Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

const points = ["시즌별 선물 패키지 구성", "수량과 예산에 맞춘 제안", "감사와 환영의 메시지를 담은 선택"];

export default async function GiftPage() {
	await waitForRouteLoadingPreview();

	return (
		<main className="bg-white">
			<PageHero
				src="/typos/SeasonGift.svg"
				alt="season-gift-image"
				className="max-w-74"
				title="시즌 기프트"
				description="품격 있는 비즈니스 시즌 기프트를 제공합니다."
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
