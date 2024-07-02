interface ProjectProps {
  project: ProjectType;
}

import styles from "@/styles/contents/projectscontent.module.css";
import { ProjectType } from "@/util/projects";

function Project({ project }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div>{project.type}</div>
      <div>{project.title}</div>
      <div>{project.date}</div>
      <div>{project.summary}</div>
      <div>
        used skills
        <ul>
          {project.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
