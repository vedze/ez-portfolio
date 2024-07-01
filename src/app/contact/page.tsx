import styles from "@/styles/contact.module.css";
import Section from "@/components/Section";
import Input from "@/components/Input";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Section name="Contact & Feedback" />
      <div className={styles.contactText}>
        <p>
          여기까지 읽어주셔서 감사합니다!
          <br />
          짧은 피드백 한 번 남겨주시면 감사하겠습니다!
        </p>
      </div>
      <Input />
      {/* 이메일 공간 */}
    </div>
  );
}
