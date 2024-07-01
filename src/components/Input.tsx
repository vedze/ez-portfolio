import styles from "@/styles/contact.module.css";

export default function Input() {
  return (
    <div className={styles.contactInput}>
      <textarea placeholder="피드백 내용은 익명으로 보내집니다. 부담없이 남겨주세요 😊" />
      <button type="submit">피드백 보내기</button>
    </div>
  );
}
