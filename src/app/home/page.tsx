import styles from "@/styles/homepage.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

import { CATCH_PHRASE } from "@/util/constants";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homeText}>
        <p>{CATCH_PHRASE}</p>
        <p>
          <span>이지은</span> 입니다.
        </p>
        <div className={styles.homeArrow}>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}
