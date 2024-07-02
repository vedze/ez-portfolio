import styles from "@/styles/contents/projectscontent.module.css";

import { projects } from "@/util/projects";
import Project from "@/components/Project";
import Button from "@/components/Button";

export default function ProjectsContent() {
  return (
    <div className={styles.projectsContent}>
      {projects.map((project, idx) => (
        <div key={idx}>
          <Project project={project} />
          <Button type="button" text="보러가기" />
        </div>
      ))}
    </div>
  );
}
