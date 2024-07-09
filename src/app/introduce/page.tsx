import CommonFrame from "@/components/CommonFrame";
import IntroduceContent from "@/container/introduce/IntroduceContent";

export default function Introduce() {
  return (
    <CommonFrame sectionName="Introduction" content={<IntroduceContent />} />
  );
}
