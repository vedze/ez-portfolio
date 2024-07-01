interface SectionProps {
  name: String;
}

import styles from "@/styles/section.module.css";

export default function Section({ name }: SectionProps) {
  return (
    <h1 className={styles.sectionName}>
      {name}
      <span>.</span>
      <div></div>
    </h1>
  );
}
