import { Heading, Text } from "@/components/base/typography";
import { homeContainerClassName } from "./shared";

export function Film() {
	return (
		<section className="w-full bg-[#f0faff]">
			<div className={`${homeContainerClassName} flex flex-col items-center gap-12 py-30`}>
				<div className="flex max-w-3xl flex-col items-center gap-4 pb-2 text-center">
					<Heading.lg as="h2" TextColor="default" weight="bold">
						고객의 만족을 더~UP 크게, <span className="text-[#1B2E74]">이디야 Size-Up!</span>
					</Heading.lg>
					<Text.Base TextColor="default">부족함 없는 넉넉한 업그레이드. 행사의 품격도 함께 업그레이드!</Text.Base>
				</div>

				<div className="w-full overflow-hidden rounded-[24px] bg-black shadow-[0_24px_80px_rgba(17,30,58,0.16)]">
					<iframe
						className="aspect-video w-full"
						src="https://www.youtube.com/embed/vMfM4kzXfv4?rel=0"
						title="EDIYA ANSAN catering brand film"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</div>
		</section>
	);
}
