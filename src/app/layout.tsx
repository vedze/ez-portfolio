import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const mont = Montserrat({ subsets: ["latin"], weight: ["400"] });
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "이지은 | 포트폴리오",
  description: "안녕하세요 이지은입니다!",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Sidebar />
        <div style={{ marginRight: "200px" }}>{children}</div>
      </body>
    </html>
  );
}
