import styles from "@/styles/components/sidebar.module.css";
import { LAST_UPDATED, EMAIL_ADD, PHONE_NUM } from "@/config/constants";

import Link from "next/link";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.dateText}>last updated: {LAST_UPDATED}</div>
      <div className={styles.linkText}>
        <Link href="/home">Home</Link>
        <Link href="/introduce">Introduction</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
      <div className={styles.infoText}>
        <div>🍀 {PHONE_NUM}</div>
        <div>💌 {EMAIL_ADD}</div>
      </div>
    </div>
  );
}
