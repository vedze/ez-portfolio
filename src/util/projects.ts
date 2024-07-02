export interface ProjectType {
  type: string;
  title: string;
  date: string;
  summary: string;
  skills: string[];
}

export const projects: ProjectType[] = [
  {
    type: "personal",
    title: "Project 1",
    date: "2024.06",
    summary: "Project 1 입니다. 테스트용 더미데이터 입니다.",
    skills: ["React", "TypeScript", "NextJS"],
  },
  {
    type: "team",
    title: "Project 2",
    date: "2024.04",
    summary: "Project 2 입니다. 테스트용 더미데이터 입니다.",
    skills: ["React", "TypeScript"],
  },
  {
    type: "personal",
    title: "Project 3",
    date: "2024.05",
    summary: "Project 3 입니다. 테스트용 더미데이터 입니다.",
    skills: ["React"],
  },
  {
    type: "personal",
    title: "Project 4",
    date: "2024.02",
    summary: "Project 4 입니다. 테스트용 더미데이터 입니다.",
    skills: ["React", "TypeScript", "NextJS"],
  },
];
