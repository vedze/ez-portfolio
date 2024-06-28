import styles from "@/styles/sidebar.module.css";
import { LAST_UPDATED } from "@/util/constants";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.dateText}>last updated: {LAST_UPDATED}</div>
      <div className={styles.linkText}>
        <Link href="/">Home</Link>
        <Link href="/intro">Introduction</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact & Feedback</Link>
      </div>
      <div className={styles.infoText}>
        <div>🍀 010-0000-0000</div>
        <div>💌 00@naver.com</div>
      </div>
    </div>
  );
}
