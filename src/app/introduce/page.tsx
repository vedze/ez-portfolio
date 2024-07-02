import CommonFrame from "@/components/CommonFrame";
import IntroduceContent from "./IntroduceContent";

export default function Introduce() {
  return (
    <CommonFrame sectionName="Introduction" content={<IntroduceContent />} />
  );
}
