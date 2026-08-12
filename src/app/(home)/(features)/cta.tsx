import Image from "next/image";

import { Heading, Text } from "@/components/base/typography";
import { ediyaBlue } from "@/constants/colors";

const consultantImageSrc = "/imgs/ediya-uniform-bowing-staff.png";

const trustBadges = ["빠른 상담"];

export function Cta() {
	return (
		<section className="w-full overflow-hidden bg-[#F4F8FF] px-4 pt-20 md:pt-24">
			<div className="mx-auto grid w-full max-w-4xl items-end gap-10 md:grid-cols-[0.95fr_1fr]">
				<div className="relative hidden min-h-[650px] md:block">
					<Image
						src={consultantImageSrc}
						alt=""
						fill
						sizes="680px"
						className="scale-150 object-contain object-bottom opacity-90"
						aria-hidden="true"
					/>
					<div className="absolute right-0 top-24 flex flex-col items-end gap-1 text-right">
						<Text.sm weight="bold" style={{ color: ediyaBlue }}>
							연락처를 남겨주시면
						</Text.sm>
						<Text.sm weight="bold" style={{ color: ediyaBlue }}>
							담당자가 빠른 시일내에 연락드릴게요!
						</Text.sm>
					</div>
				</div>

				<div className="pb-16 md:pb-20">
					<form className="rounded-lg bg-white p-6 shadow-[0_20px_70px_rgba(27,46,116,0.10)] md:p-8" action="/contact" method="post">
						<div className="flex flex-col gap-6">
							<div className="flex flex-wrap gap-2">
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

									<Text.sm TextColor="default">요청에 따라 알맞는 구성을 추천해드릴게요.</Text.sm>
								</div>
							</div>

							<div className="flex flex-col gap-4">
								<label className="flex flex-col gap-2" htmlFor="cta-company">
									<Text.xs as="span" TextColor="default" weight="bold">
										업체명 *
									</Text.xs>
									<input
										id="cta-company"
										name="companyName"
										type="text"
										required
										placeholder="업체명을 입력해주세요."
										autoComplete="organization"
										className="h-11 rounded border border-[#C9D5E8] px-4 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#9AA8BC] focus:border-[#1B2E74]"
									/>
								</label>

								<label className="flex flex-col gap-2" htmlFor="cta-company">
									<Text.xs as="span" TextColor="default" weight="bold">
										담당자명 *
									</Text.xs>
									<input
										id="cta-company"
										name="companyName"
										type="text"
										required
										placeholder="담당자님 성함을 입력해주세요."
										autoComplete="organization"
										className="h-11 rounded border border-[#C9D5E8] px-4 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#9AA8BC] focus:border-[#1B2E74]"
									/>
								</label>

								<label className="flex flex-col gap-2" htmlFor="cta-company">
									<Text.xs as="span" TextColor="default" weight="bold">
										필요 서비스 *
									</Text.xs>
									<input
										id="cta-company"
										name="companyName"
										type="text"
										required
										placeholder="필요하신 서비스 내용을 알려주세요."
										autoComplete="organization"
										className="h-11 rounded border border-[#C9D5E8] px-4 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#9AA8BC] focus:border-[#1B2E74]"
									/>
								</label>

								<div className="flex flex-col gap-2">
									<label htmlFor="cta-phone">
										<Text.xs as="span" TextColor="default" weight="bold">
											연락처 *
										</Text.xs>
									</label>
									<div className="grid grid-cols-[88px_1fr] gap-2">
										<select
											id="cta-country-code"
											name="countryCode"
											defaultValue="+82"
											aria-label="국가 번호"
											className="h-11 rounded border border-[#C9D5E8] bg-white px-3 text-sm text-[#222222] outline-none transition-colors focus:border-[#1B2E74]"
										>
											<option value="+82">KR +82</option>
										</select>
										<input
											id="cta-phone"
											name="phone"
											type="tel"
											required
											placeholder="010-0000-0000"
											autoComplete="tel-national"
											className="h-11 rounded border border-[#C9D5E8] px-4 text-sm text-[#222222] outline-none transition-colors placeholder:text-[#9AA8BC] focus:border-[#1B2E74]"
										/>
									</div>
								</div>

								<label className="flex items-center gap-2" htmlFor="cta-agree">
									<input
										id="cta-agree"
										name="privacyAgreement"
										type="checkbox"
										required
										className="h-4 w-4 rounded border-[#C9D5E8] accent-[#1B2E74]"
									/>
									<Text.xs as="span" TextColor="default">
										[필수] 개인정보 수집 및 이용 동의
									</Text.xs>
									<a className="text-xs underline underline-offset-2" href="/privacy" style={{ color: ediyaBlue }}>
										약관보기
									</a>
								</label>
							</div>

							<button
								type="submit"
								className="h-13 rounded font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1B2E74] focus:ring-offset-2"
								style={{ backgroundColor: ediyaBlue }}
							>
								빠른 상담하기
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
