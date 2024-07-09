// sendEmail, receiveEmail 형식 지정 로직 (email ui 구성 로직)

import nodemailer from "nodemailer";

export interface ISendContactFormType {
  from: string; // 작성자
  subject: string; // 제목
  text: string; // 내용
}

interface IReceiveContactFormType {
  from: string; // 작성자
  to: string; // 내 메일
  subject: string; // 제목
  html: string; // 이메일 htlm body
}

export function contactForm({ from, subject, text }: ISendContactFormType) {
  // naver mail transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NAVER_EMAIL,
      pass: process.env.NAVER_PWD,
    },
    // logger: true,
  });

  // gmail transporter -> ok
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.GOOGLE_EMAIL,
  //     pass: process.env.GOOGLE_PWD,
  //   },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
  // //   logger: true,
  // });

  // mailing option
  const contactEmail: IReceiveContactFormType = {
    from: process.env.NAVER_EMAIL || "",
    to: process.env.NAVER_EMAIL || "",
    subject: `[CONTACT] ${subject}`,
    html: `
        <div>${text}</div>
        <br/>
        <strong>보낸 사람: ${from}</strong>
    `,
  };

  // console.log("**contact Email options: ", contactEmail);

  return transporter.sendMail(contactEmail, (error, info) => {
    if (error) {
      console.error("오류 발생: ", error);
    } else {
      console.log("이메일 전송 성공: ", info.response);
    }
  });
}
