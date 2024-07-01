import FeedbackInput from "@/components/FeedbackInput";
import styles from "@/styles/contactcontent.module.css";

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
      <FeedbackInput />
    </div>
  );
}
