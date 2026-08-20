import { waitForRouteLoadingPreview } from "@/app/_components/loading-delay";
import { PageHero } from "@/app/_components/Page-Hero";
import { Cta } from "@/components/globals/cta";

import { CateringCta } from "./_features/catering-cta";
import { Problem } from "./_features/problem";
import { Solution } from "./_features/solution";
import { Solve } from "./_features/solve";

export default async function CateringPage() {
	await waitForRouteLoadingPreview();

	return (
		<main className="bg-white">
			<PageHero
				src="/typos/Catering.svg"
				alt="catering"
				className="max-w-56"
				title="커피 케이터링"
				description="품격있는 비즈니스 커피 케이터링을 제공합니다."
			/>

			<Problem />
			<Solve />
			<Solution />
			<CateringCta />
			<div id="catering-consultation">
				<Cta />
			</div>
		</main>
	);
}
