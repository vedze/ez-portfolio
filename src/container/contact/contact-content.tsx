"use client";

import styles from "@/styles/contents/contactcontent.module.css";
import { useRef, useState } from "react";
import { sendContactEmail } from "@/app/api/send-email";

const initContactData = {
  from: "",
  subject: "",
  text: "",
};

export default function ContactContent() {
  const [contactData, setContactData] = useState(initContactData);

  // 입력값 업데이트
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactData({ ...contactData, [id]: value });
  };

  // 이메일 Sending 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("test: ", contactData); -> ok

    e.preventDefault(); // 페이지 새로고침 방지
    try {
      await sendContactEmail(contactData);
      setContactData(initContactData);
    } catch (error) {
      console.error("이메일 전송 중 오류가 발생했습니다: ", error);
    }
  };

  // 반응형 TextArea 함수
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight - 40
      }px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactContent}>
      <div className={styles.contentGroup}>
        <label htmlFor="subject">제목</label>
        <input
          id="subject"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={handleChange}
          value={contactData.subject}
        />
      </div>

      <div className={styles.contentGroup}>
        <label htmlFor="text">본문</label>
        <textarea
          id="text"
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
          onInput={handleResizeHeight}
          ref={textareaRef}
          rows={1}
          value={contactData.text}
        />
      </div>

      <div className={styles.contentGroup}>
        <label htmlFor="from">보내는 분</label>
        <input
          id="from"
          type="text"
          placeholder="이메일 주소를 입력해주세요"
          onChange={handleChange}
          value={contactData.from}
        />
      </div>

      <button type="submit" className={styles.submit}>
        이메일 보내기
      </button>
    </form>
  );
}
