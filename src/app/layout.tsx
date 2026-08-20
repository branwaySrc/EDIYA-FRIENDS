import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/globals/footer";
import { Gnb } from "@/components/globals/gnb";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "이디야 프렌즈 | 비즈니스에 어울리는 커피",
	description: "이디야 프렌즈는 비즈니스에 가장 잘 어울리는 커피 솔루션을 제공합니다.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className={`${inter.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Gnb />
				{children}
				<Footer />
			</body>
		</html>
	);
}
