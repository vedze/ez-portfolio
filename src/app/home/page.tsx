import styles from "@/styles/homepage.module.css";

export default function HomePage() {
  return (
    <div className={styles.background}>
      <div className={styles.homeText}>
        이상을 꿈꾸는
        <br />
        <span>이지은</span> 입니다.
      </div>
    </div>
  );
}
