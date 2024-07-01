import styles from "@/styles/contact.module.css";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Section name="Contact & Feedback" />
      <div className={styles.contactText}>
        여기까지 읽어주셔서 감사합니다!
        <br />
        실례가 안 된다면 짧은 피드백 한 번 남겨주시면 감사하겠습니다!
        <br />
        <span>
          피드백 내용은 익명으로, 저에게만 보여집니다. 부담없이 남겨주세요 😊
        </span>
      </div>
      <div className={styles.contactInput}>
        <input placeholder="피드백을 남겨주세요" />
        <button type="submit">피드백 보내기</button>
      </div>
    </div>
  );
}
