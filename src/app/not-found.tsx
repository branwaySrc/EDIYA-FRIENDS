import { CircleAlert } from "lucide-react";

import { Action } from "@/components/base/actions/actions";
import { Heading, Text } from "@/components/base/typography";

export default function NotFound() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-4 py-32">
			<section className="flex w-full max-w-[360px] flex-col items-center text-center">
				<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#DADCE0] text-[#DADCE0]" aria-hidden="true">
					<CircleAlert size={36} strokeWidth={2.2} />
				</div>

				<Heading.sm as="h1" TextColor="sub" weight="bold" className="mb-4">
					해당 페이지를 찾을 수 없습니다.
				</Heading.sm>

				<div className="flex flex-col gap-1">
					<Text.sm TextColor="sub">요청하신 페이지의 주소가 잘못되었거나,</Text.sm>
					<Text.sm TextColor="sub">주소가 변경 또는 삭제되어 사용할 수 없습니다.</Text.sm>
					<Text.sm TextColor="sub">입력한 주소를 다시 확인해 주세요.</Text.sm>
				</div>

				<Action.Link href="/" rounded="full" px={20} py={10} backgroundColor="buttonDefault" className="mt-8">
					<Action.Text label="홈으로 돌아가기" TextColor="primary" weight="bold" />
				</Action.Link>
			</section>
		</main>
	);
}
