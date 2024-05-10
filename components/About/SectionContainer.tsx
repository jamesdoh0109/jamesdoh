"use client";

import { useState } from "react";
import Introduction from "@/components/About/Sections/Introduction";
import TechStack from "@/components/About/Sections/TechStack";
import ToggleSections from "@/components/About/ToggleSections";

const SECTIONS = [
  { name: "Introduction", component: <Introduction key={0} /> },
  { name: "Tech Stack", component: <TechStack key={1} /> },
];

export default function SectionContainer() {
  const [currSection, setCurrSection] = useState(0);

  return (
    <div className="w-1/2 hide-desktop-image:w-full flex flex-col justify-between space-y-4 laptop:pl-3 laptop:pr-32 text-start tablet:px-12 px-5">
      <div className="h-12" />
      {SECTIONS[currSection]["component"]}
      <ToggleSections
        currSection={currSection}
        setCurrSection={setCurrSection}
        prevSectionName={
          currSection - 1 >= 0 ? SECTIONS[currSection - 1]["name"] : undefined
        }
        nextSectionName={
          currSection + 1 < SECTIONS.length
            ? SECTIONS[currSection + 1]["name"]
            : undefined
        }
      />
    </div>
  );
}
