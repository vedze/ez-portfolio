export interface ProjectType {
  type: string;
  title: string;
  date: string;
  summaries: string[];
  skills: string[];
  links?: string[];
}

export const projects: ProjectType[] = [
  {
    type: "개인 프로젝트",
    title: "개인 포트폴리오 사이트",
    date: "2024년 6월 28일 - 진행중",
    summaries: [
      "개인 포트폴리오 제작 프로젝트입니다.",
      "포트폴리오 만들기 힘드러",
      "포트폴리오오오오오오",
    ],
    skills: ["React", "TypeScript", "NextJS"],
    links: ["github link"],
  },
  {
    type: "팀 프로젝트",
    title: "Team Portfolio",
    date: "2024.04",
    summaries: ["누구나 이용할 수 있는 공유 포트폴리오 사이트 프로젝트입니다."],
    skills: ["React", "TypeScript"],
  },
  // {
  //   type: "personal",
  //   title: "Project 3",
  //   date: "2024.05",
  //   summaries: ["Project 3 입니다. 테스트용 더미데이터 입니다."],
  //   skills: ["React"],
  // },
  // {
  //   type: "personal",
  //   title: "Project 4",
  //   date: "2024.02",
  //   summaries: ["Project 4 입니다. 테스트용 더미데이터 입니다."],
  //   skills: ["React", "TypeScript", "NextJS"],
  // },
];
