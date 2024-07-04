"use client";

import { useState } from "react";

export default function ContactForm() {
  const [contactData, setContactData] = useState({
    from: "",
    subject: "",
    text: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setContactData({ ...contactData, [name]: value });
    // console.log(contactData);
  };

  const onSubmit = (input: React.FormEvent<HTMLFormElement>) => {
    console.log(contactData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="from">From </label>
        <input
          name="from"
          type="text"
          placeholder="이메일 주소를 입력해주세요"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="subject">Title </label>
        <input
          name="subject"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="text">Details </label>
        <textarea
          name="text"
          placeholder="내용을 입력해주세요"
          onChange={onChange}
        />
      </div>

      <button type="submit">이메일 보내기</button>
    </form>
  );
}
