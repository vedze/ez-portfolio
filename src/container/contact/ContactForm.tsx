"use client";

import styles from "@/styles/contents/contactcontent.module.css";
import { ISendContactFormType } from "@/app/api/email";
import { useRef } from "react";

interface IContactFormProps {
  contactData: ISendContactFormType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({
  contactData,
  handleChange,
  handleSubmit,
}: IContactFormProps) {
  // textarea ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 반응형 textarea
  // const handleResizeHeight = () => {
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "auto";
  //     textareaRef.current.style.height = `${
  //       textareaRef.current.scrollHeight - 40
  //     }px`;
  //   }
  // };

  // contact form
  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.contentGroup}>
        <label htmlFor="from">보내는 분</label>
        <input
          required
          id="from"
          type="text"
          onChange={handleChange}
          value={contactData.from}
          placeholder="이메일 주소를 입력해주세요"
        />
      </div>
      <div className={styles.contentGroup}>
        <label htmlFor="subject">제목</label>
        <input
          required
          id="subject"
          type="text"
          onChange={handleChange}
          value={contactData.subject}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className={styles.contentGroup}>
        <label htmlFor="text">내용</label>
        <textarea
          required
          id="text"
          onChange={handleChange}
          // onInput={handleResizeHeight}
          // ref={textareaRef}
          value={contactData.text}
          // rows={1}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        이메일 보내기
      </button>
    </form>
  );
}
