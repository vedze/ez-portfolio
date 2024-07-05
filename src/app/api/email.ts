// sendEmail, receiveEmail 형식 지정 로직 (email ui 구성 로직)

import nodemailer from "nodemailer";

interface ISendEmailFormType {
  from: string; // 작성자
  subject: string; // 제목
  text: string; // 내용
}

interface IReceiveEmailFormType {
  from: string; // 작성자
  to: string; // 내 메일
  subject: string; // 제목
  html: string; // 이메일 htlm body
}

export function sendEmail({ from, subject, text }: ISendEmailFormType) {
  // transporter
  const transporter = nodemailer.createTransport({
    service: "naver",
    host: "smtp.naver.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PWD,
    },
  });

  // mailing option
  const receiveEmailForm: IReceiveEmailFormType = {
    from,
    to: process.env.MY_EMAIL || "",
    subject: `test ${subject}`,
    html: `
        <h1>${subject}</h1>
        <div>${text}</div>
        <br/>
        <p>보낸 사람: ${from}</p>
    `,
  };

  return transporter.sendMail(receiveEmailForm);
}