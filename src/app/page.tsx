import styles from "./page.module.css";

import HomePage from "./home/page";
import Introduce from "./introduce/page";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <HomePage />
        <Introduce />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
