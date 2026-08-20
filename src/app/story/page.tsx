import { waitForRouteLoadingPreview } from "@/app/_components/loading-delay";
import { PageHero } from "@/app/_components/Page-Hero";
import { Action } from "@/components/base/actions/actions";
import { Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

const points = ["커피 케이터링 소개", "프라이빗 스낵바 운영 안내", "시즌 기프트 구성 예시"];

export default async function StoryPage() {
	await waitForRouteLoadingPreview();

	return (
		<main className="bg-white">
			<PageHero
				src="/typos/Story.svg"
				alt="ediya-friends-story"
				className="max-w-37"
				title="이디야 프렌즈 스토리"
				description="비즈니스의 품격을 만드는 이디야 프렌즈."
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
