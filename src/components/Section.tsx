import styles from "@/styles/section.module.css";

// interface SectionProps {
//   name: string;
// }

export default function Section({ name }: { name: String }) {
  return (
    <h1 className={styles.sectionName}>
      {name}
      <span>.</span>
      <div></div>
    </h1>
  );
}
