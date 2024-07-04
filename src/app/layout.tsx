import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/globals.css";
import styles from "@/styles/layout.module.css";
import SideBar from "@/components/SideBar";

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
      <body className={`${pretendard.className} ${styles.container}`}>
        <div className={styles.content}>{children}</div>
        <nav className={styles.sidebar}>
          <SideBar />
        </nav>
      </body>
    </html>
  );
}
