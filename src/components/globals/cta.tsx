import Image from "next/image";
import Link from "next/link";

import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

const consultantImageSrc = "/imgs/ediya-uniform-bowing-staff.png";

const trustBadges = ["빠른 상담"];
const serviceOptions = ["케이터링 문의", "스낵바 문의", "시즌기프트 문의", "협업문의"];

const fieldClassName =
	"h-11 rounded-lg border border-[#C9D5E8] bg-white px-4 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#9AA8BC] focus:border-[#1B2E74]";

export function Cta() {
	return (
		<section className="w-full overflow-hidden bg-[#F4F8FF] px-4 pt-20 md:pt-24">
			<div className="mx-auto flex w-full max-w-4xl flex-col items-center">
				<form className="w-full rounded-2xl bg-white p-6 border border-slate-200 md:p-8 lg:p-10" action="/contact" method="post">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col items-center gap-4 text-center">
							<div className="flex flex-wrap justify-center gap-2">
								{trustBadges.map(badge => (
									<span className="inline-flex items-center gap-1 rounded border border-[#C9D5E8] px-2.5 py-1" key={badge}>
										<span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ediyaBlue }} aria-hidden="true" />
										<Text.xs as="span" TextColor="default" weight="bold">
											{badge}
										</Text.xs>
									</span>
								))}
							</div>

							<div className="flex flex-col gap-3">
								<div className="flex flex-col gap-1">
									<Heading.base as="h2" TextColor="default" weight="bold">
										연락처를 알려주시면
									</Heading.base>
									<Heading.base as="h2" TextColor="primary" weight="bold">
										바로 연락 드릴게요!
									</Heading.base>
								</div>
								<div className="flex flex-col gap-2">
									<Text.xs TextColor="sub">대표지점 | 이디야커피 동안산병원점 / 010-4514-7173</Text.xs>
								</div>
							</div>
						</div>

						<div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
							<div className="flex flex-col gap-4">
								<label className="flex flex-col gap-2" htmlFor="cta-company">
									<Text.sm as="span" TextColor="default" weight="bold">
										업체명 *
									</Text.sm>
									<input
										id="cta-company"
										name="companyName"
										type="text"
										required
										placeholder="업체명을 입력해주세요."
										autoComplete="organization"
										className={fieldClassName}
									/>
								</label>

								<label className="flex flex-col gap-2" htmlFor="cta-manager">
									<Text.sm as="span" TextColor="default" weight="bold">
										담당자명 *
									</Text.sm>
									<input
										id="cta-manager"
										name="managerName"
										type="text"
										required
										placeholder="담당자님 성함을 입력해주세요."
										autoComplete="name"
										className={fieldClassName}
									/>
								</label>
							</div>

							<div className="flex flex-col gap-4">
								<label className="flex flex-col gap-2" htmlFor="cta-service">
									<Text.sm as="span" TextColor="default" weight="bold">
										필요 서비스 *
									</Text.sm>
									<select id="cta-service" name="serviceType" required defaultValue="" className={fieldClassName}>
										<option value="" disabled>
											필요하신 서비스를 선택해주세요.
										</option>
										{serviceOptions.map(option => (
											<option value={option} key={option}>
												{option}
											</option>
										))}
									</select>
								</label>

								<div className="flex flex-col gap-2">
									<label htmlFor="cta-phone">
										<Text.sm as="span" TextColor="default" weight="bold">
											연락처 *
										</Text.sm>
									</label>
									<input
										id="cta-phone"
										name="phone"
										type="tel"
										required
										placeholder="010-0000-0000"
										autoComplete="tel-national"
										className={fieldClassName}
									/>
								</div>
							</div>
						</div>

						<div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
							<div className="flex flex-wrap items-center gap-2">
								<label className="flex items-center gap-2" htmlFor="cta-agree">
									<input
										id="cta-agree"
										name="privacyAgreement"
										type="checkbox"
										defaultChecked
										required
										className="h-4 w-4 rounded border-[#C9D5E8] accent-[#1B2E74]"
									/>
									<Text.sm as="span" TextColor="default">
										[필수] 개인정보 수집 및 이용 동의
									</Text.sm>
								</label>
								<Link className="text-xs underline underline-offset-2" href="/others" style={{ color: ediyaBlue }}>
									약관보기
								</Link>
							</div>

							<button
								type="submit"
								className="h-13 w-full rounded-xl px-8 font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1B2E74] focus:ring-offset-2 lg:w-[220px]"
								style={{ backgroundColor: ediyaBlue }}
							>
								빠른 상담하기
							</button>
						</div>
					</div>
				</form>

				<div className="relative mt-8 h-[360px] w-full max-w-4xl md:h-[520px]">
					<Image
						src={consultantImageSrc}
						alt=""
						fill
						sizes="(max-width: 768px) 100vw, 896px"
						className="object-contain object-bottom opacity-90"
						aria-hidden="true"
					/>
				</div>
			</div>
		</section>
	);
}
