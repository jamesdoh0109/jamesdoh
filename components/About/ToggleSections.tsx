import { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ToggleSectionsProps = {
  currSection: number;
  setCurrSection: Dispatch<SetStateAction<number>>;
  prevSectionName?: string;
  nextSectionName?: string;
};

export default function ToggleSections({
  currSection,
  setCurrSection,
  prevSectionName,
  nextSectionName,
}: ToggleSectionsProps) {
  return (
    <div className="flex justify-between text-grey-1 dark:text-grey-2 h-12">
      <div
        className={`${currSection === 0 && "invisible"} flex cursor-pointer`}
        onClick={() => setCurrSection(currSection - 1)}
      >
        <ChevronLeft />
        {prevSectionName}
      </div>
      <div
        className={`${currSection === 1 && "invisible"} flex cursor-pointer`}
        onClick={() => setCurrSection(currSection + 1)}
      >
        {nextSectionName}
        <ChevronRight />
      </div>
    </div>
  );
}
