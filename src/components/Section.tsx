interface SectionProps {
  name: String;
}

import styles from "@/styles/components/section.module.css";

export default function Section({ name }: SectionProps) {
  return (
    <h1 className={styles.section}>
      {name}
      <span>.</span>
      <div></div>
    </h1>
  );
}
