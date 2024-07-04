import styles from "@/styles/contents/projectscontent.module.css";

import { projects } from "@/config/projects";
import Project from "@/app/projects/project-form";

export default function ProjectsContent() {
  return (
    <div className={styles.projectsContent}>
      {projects.map((project, idx) => (
        <div key={idx}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}
