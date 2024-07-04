"use client";

import styles from "@/styles/contents/contactcontent.module.css";
import { useState } from "react";

export default function ContactContent() {
  const [contactData, setContactData] = useState({
    from: "",
    subject: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setContactData({ ...contactData, [name]: value });
    // console.log(contactData);
  };

  const handleSubmit = (input: React.FormEvent<HTMLFormElement>) => {
    console.log(contactData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactContent}>
      <div className={styles.contentGroup}>
        <label htmlFor="subject">제목</label>
        <input
          name="subject"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={handleChange}
        />
      </div>

      <div className={styles.contentGroup}>
        <label htmlFor="text">본문</label>
        <textarea
          name="text"
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
          className={styles.autosizeTextarea}
        />
      </div>

      <div className={styles.contentGroup}>
        <label htmlFor="from">보내는 분</label>
        <input
          name="from"
          type="text"
          placeholder="이메일 주소를 입력해주세요"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={styles.submit}>
        이메일 보내기
      </button>
    </form>
  );
}
