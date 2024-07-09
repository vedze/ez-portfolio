// 클라이언트에서 작성한 contactEmailForm 받아와 서버로 api 요청 로직

import { ISendContactFormType } from "./email";

export async function sendContactEmail(contactEmail: ISendContactFormType) {
  // console.log("conatctEmail: ", contactEmail); -> ok

  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactEmail),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log("response:", response.json());
  const data = await response.json();
  // console.log("data: ", data);

  if (!response.ok) {
    throw new Error(data.message || "서버 요청 실패");
  }

  return data;
}
