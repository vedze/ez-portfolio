"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/api/send-email";
import { ISendContactFormType } from "@/app/api/email";
import ContactForm from "./ContactForm";

const initContactData = {
  from: "",
  subject: "",
  text: "",
};

export default function ContactContent() {
  const [contactData, setContactData] =
    useState<ISendContactFormType>(initContactData);

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

  return (
    <ContactForm
      contactData={contactData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
