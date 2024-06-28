import styles from "./page.module.css";

import HomePage from "./home/page";
import About from "./intro/page";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
