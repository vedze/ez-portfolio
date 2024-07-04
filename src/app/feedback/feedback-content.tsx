import styles from "@/styles/contents/feedbackcontent.module.css";
import { PLACE_HOLDER } from "@/config/constants";
import Button from "@/components/Button";

export default function FeedbackContent() {
  return (
    <div>
      <div className={styles.feedbackText}>
        <p>
          여기까지 읽어주셔서 감사합니다!
          <br />
          짧은 피드백 한 번 남겨주시면 감사하겠습니다!
        </p>
      </div>
      <div className={styles.feedbackInput}>
        <textarea placeholder={PLACE_HOLDER} />
        <Button type="submit" text="피드백 보내기" />
      </div>
    </div>
  );
}
