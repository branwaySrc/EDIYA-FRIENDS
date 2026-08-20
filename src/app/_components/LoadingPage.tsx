function SkeletonBlock({ className }: { className: string }) {
	return <div className={["animate-pulse rounded bg-white/20", className].join(" ")} aria-hidden="true" />;
}

export function LoadingPage() {
	return (
		<main className="bg-white" aria-busy="true" aria-live="polite">
			<span className="sr-only">페이지를 불러오는 중입니다.</span>

			<section className="min-h-50 bg-[#111E3A] px-4 pb-20 pt-36 text-white">
				<div className="mx-auto grid w-full max-w-[1100px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
					<div className="flex flex-col gap-5">
						<SkeletonBlock className="h-12 w-full max-w-[620px]" />
						<SkeletonBlock className="h-12 w-4/5 max-w-[520px]" />
					</div>

					<div className="flex flex-col gap-3 lg:justify-self-end">
						<SkeletonBlock className="h-5 w-full max-w-[520px]" />
						<SkeletonBlock className="h-5 w-11/12 max-w-[480px]" />
						<SkeletonBlock className="h-5 w-2/3 max-w-[340px]" />
					</div>
				</div>
			</section>
		</main>
	);
}
