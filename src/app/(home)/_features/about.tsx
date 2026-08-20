import Image from "next/image";

import { Badge } from "@/components/base/badge";
import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

export function About() {
	return (
		<section className="grid w-full pt-10 lg:grid-cols-2">
			<div className="relative min-h-[580px] overflow-hidden bg-[#E6F0FA] lg:min-h-[640px]">
				<Image src={"/imgs/catering.jpg"} alt="EDIYA catering poster" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
				<div className="absolute inset-0 bg-gradient-to-br from-[#111E3A]/8 via-transparent to-[#111E3A]/16" aria-hidden="true" />
			</div>

			<aside className="flex min-h-[520px] items-center justify-start px-4 py-20 lg:min-h-[640px] lg:px-16" style={{ backgroundColor: ediyaBlue }}>
				<div className="flex w-full max-w-md flex-col gap-16">
					<div className="flex flex-col gap-6">
						<Badge backgroundColor="#FFFFFF" rounded={10} color={ediyaBlue} px={16} weight="bold">
							About Us
						</Badge>
						<article className="flex flex-col gap-2">
							<Heading.lg as="h2" TextColor="white" weight="bold">
								필요한 순간마다
							</Heading.lg>
							<Heading.lg as="h2" TextColor="white" weight="bold">
								빠르고, 간편하게.
							</Heading.lg>
						</article>
					</div>

					<div className="flex flex-col gap-1">
						<Text.sm TextColor="white">함께 고민하는 비즈니스 파트너, 이디야 프렌즈.</Text.sm>
						<Text.sm TextColor="white">실제 매장을 운영하며 만든 노하우로, 메뉴 추천과 구성을</Text.sm>
						<Text.sm TextColor="white">정확하고 책임있는 준비를 약속합니다.</Text.sm>
					</div>
				</div>
			</aside>
		</section>
	);
}
