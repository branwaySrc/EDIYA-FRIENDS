import type { ReactNode } from "react";
import Image from "next/image";

import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

type PageHeroProps = {
	title: ReactNode;
	description: ReactNode;
	backgroundColor?: string;
	src?: string;
	alt?: string;
	className?: string;
};

export function PageHero({ title, description, backgroundColor = ediyaBlue, src, alt = "", className }: PageHeroProps) {
	return (
		<section className="px-4 pb-20 pt-36 text-white" style={{ backgroundColor }}>
			<div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
				<div className="flex min-w-0 flex-col min-h-30 justify-between">
					{src ? <Image src={src} alt={alt} height={100} width={350} className={["h-auto", className].filter(Boolean).join(" ")} /> : null}
					<Heading.sm as="h1" TextColor="white" weight="bold">
						{title}
					</Heading.sm>
				</div>

				<Text.base TextColor="white" className="max-w-xl opacity-85 lg:justify-self-end">
					{description}
				</Text.base>
			</div>
		</section>
	);
}
