import CommonFrame from "@/components/CommonFrame";
import IntroduceContent from "./introduce-content";

export default function Introduce() {
  return (
    <CommonFrame sectionName="Introduction" content={<IntroduceContent />} />
  );
}
