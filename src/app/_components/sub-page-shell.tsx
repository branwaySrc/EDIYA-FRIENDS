import { Action } from "@/components/base/actions/actions";
import { Badge } from "@/components/base/badge";
import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

type SubPageShellProps = {
	badge: string;
	title: string;
	description: string;
	points: string[];
};

export function SubPageShell({ badge, title, description, points }: SubPageShellProps) {
	return (
		<main className="bg-white">
			<section className="bg-[#111E3A] px-4 pb-20 pt-36 text-white">
				<div className="mx-auto flex w-full max-w-[1100px] flex-col gap-8">
					<Badge backgroundColor="rgba(255,255,255,0.14)" TextColor="white" rounded={999} px={16} py={8} weight="bold">
						{badge}
					</Badge>
					<div className="flex max-w-3xl flex-col gap-5">
						<Heading.lg as="h1" TextColor="white" weight="bold">
							{title}
						</Heading.lg>
						<Text.base TextColor="white" className="opacity-85">
							{description}
						</Text.base>
					</div>
				</div>
			</section>

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
