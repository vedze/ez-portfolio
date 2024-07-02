import styles from "@/styles/commonframe.module.css";
import Section from "./Section";

interface FrameProps {
  sectionName: String;
  content?: React.ReactNode;
}

export default function CommonFrame({ sectionName, content }: FrameProps) {
  return (
    <div className={styles.commonFrame}>
      <Section name={sectionName} />
      {content ? content : "아직 content가 없습니다."}
    </div>
  );
}
