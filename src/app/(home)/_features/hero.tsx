import { Text } from "@/components/base/typography";

export function Hero() {
	return (
		<>
			<section className="relative mx-auto h-[80vh] max-h-200 min-h-150 w-full max-w-[1920px] overflow-hidden">
				<video
					className="absolute inset-0 h-full w-full object-cover"
					src="/video/hero_video.mp4"
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					aria-label="EDIYA FRIENDS hero video"
				/>
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.00) 38%, rgba(0,0,0,0.15) 100%)",
					}}
					aria-hidden="true"
				/>
			</section>
			<div className="flex justify-center bg-[#1B2E74] py-3 text-center px-4">
				<Text.xs TextColor="white">
					EDIYA FRIENDS는 이디야 커피 <strong>안산 월피동점·동안산병원점</strong>이 자제적으로 제공하는 B2B 솔루션으로 (주)이디야 본사 서비스와는
					별개로 운영됩니다.
				</Text.xs>
			</div>
		</>
	);
}
