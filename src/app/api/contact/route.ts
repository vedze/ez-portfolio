import { contactForm } from "@/app/api/email";

export async function POST(required: Request) {
  try {
    const response = await required.json();
    // console.log("response: ", response); -> ok

    await contactForm(response);

    return (
      // 성공시 success 메시지, 200: 서버 요청 성공 코드
      new Response(JSON.stringify({ message: "success!" }), {
        status: 200,
      })
    );
  } catch (error) {
    // 실패시 fail 메시지, 500: 내부 서버 오류, 구체적인 내용 표시 불가 코드
    // console.error(error);
    return new Response(JSON.stringify({ message: "fail!" }), {
      status: 500,
    });
  }
}
