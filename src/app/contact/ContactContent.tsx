import styles from "@/styles/contact.module.css";
import Input from "@/components/Input";

export default function ContactContent() {
  return (
    <div>
      <div className={styles.contactText}>
        <p>
          여기까지 읽어주셔서 감사합니다!
          <br />
          짧은 피드백 한 번 남겨주시면 감사하겠습니다!
        </p>
      </div>
      <Input />
    </div>
  );
}
