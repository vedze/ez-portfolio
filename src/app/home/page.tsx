import styles from "@/styles/homepage.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

import { CATCH_PHRASE } from "@/config/constants";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homeText}>
        <p>{CATCH_PHRASE}</p>
        <p>
          <span>이지은</span> 입니다.
        </p>
        <MdKeyboardArrowDown className={styles.homeArrow} />
      </div>
    </div>
  );
}
