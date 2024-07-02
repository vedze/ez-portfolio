import styles from "@/styles/contents/projectscontent.module.css";
import { ProjectType } from "@/util/projects";

interface ProjectProps {
  project: ProjectType;
}

function Project({ project }: ProjectProps) {
  return (
    <div className={styles.project}>
      <section className={styles.titleSection}>
        <div>{project.type}</div>
        <h1>{project.title}</h1> {/* onclick */}
        <time>{project.date}</time>
      </section>

      <section className={styles.summarySection}>
        {project.summaries.map((summary, idx) => (
          <div key={idx}>✅ {summary}</div>
        ))}
      </section>

      <section className={styles.skillSection}>
        <p>사용 기술</p>
        {project.skills.map((skill, idx) => (
          <div key={idx}>{skill}</div>
        ))}
      </section>
      <section className={styles.linkSection}>
        <p>링크</p>
        {project.links?.map((link, idx) => (
          <div key={idx}>{link}</div>
        ))}
      </section>
    </div>
  );
}

export default Project;
