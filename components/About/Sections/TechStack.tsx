import CSS from "@/components/svg/CSS";
import Django from "@/components/svg/Django";
import Flask from "@/components/svg/Flask";
import HTML from "@/components/svg/HTML";
import Java from "@/components/svg/Java";
import JavaScript from "@/components/svg/JavaScript";
import MongoDB from "@/components/svg/MongoDB";
import MySQL from "@/components/svg/MySQL";
import Next from "@/components/svg/Next";
import OCaml from "@/components/svg/OCaml";
import Prisma from "@/components/svg/Prisma";
import Python from "@/components/svg/Python";
import React from "@/components/svg/React";
import ReactHookForm from "@/components/svg/ReactHookForm";
import ReactQuery from "@/components/svg/ReactQuery";
import Redux from "@/components/svg/Redux";
import Tailwind from "@/components/svg/Tailwind";
import TypeScript from "@/components/svg/TypeScript";
import SkillBar from "../SkillBar";

const LANGUAGES = [
  {
    key: "python",
    name: "Python",
    component: <Python className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[75%]",
  },
  {
    key: "javascript",
    name: "JavaScript",
    component: <JavaScript className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[80%]",
  },
  {
    key: "typescript",
    name: "TypeScript",
    component: <TypeScript className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[70%]",
  },
  {
    key: "C/C++",
    name: "TypeScript",
    component: <TypeScript className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[40%]",
  },
  {
    key: "html",
    name: "HTML",
    component: <HTML className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[90%]",
  },
  {
    key: "css",
    name: "CSS",
    component: <CSS className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[78%]",
  },
  {
    key: "java",
    name: "Java",
    component: <Java className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[50%]",
  },
  {
    key: "ocaml",
    name: "OCaml",
    component: <OCaml className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[15%]",
  },
];

const FRAMEWORKS_AND_LIBRARIES = [
  {
    key: "react",
    name: "React.js",
    component: <React className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[90%]",
  },
  {
    key: "next",
    name: "Next.js",
    component: <Next className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[80%]",
  },
  {
    key: "redux",
    name: "Redux",
    component: <Redux className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[70%]",
  },
  {
    key: "tailwind",
    name: "Tailwind",
    component: <Tailwind className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[70%]",
  },
  {
    key: "reactquery",
    name: "React Query",
    component: <ReactQuery className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[60%]",
  },
  {
    key: "reacthookform",
    name: "React Hook Form",
    component: <ReactHookForm className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[55%]",
  },
  {
    key: "flask",
    name: "Flask",
    component: <Flask className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[60%]",
  },
  {
    key: "django",
    name: "Django",
    component: <Django className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[25%]",
  },
];

const DATABASE = [
  {
    key: "mysql",
    name: "MySQL",
    component: <MySQL className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[40%]",
  },
  {
    key: "mongodb",
    name: "MongoDB",
    component: <MongoDB className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[40%]",
  },
  {
    key: "prisma",
    name: "Prisma",
    component: <Prisma className="w-6 h-6 fill-black dark:fill-white" />,
    skill: "w-[20%]",
  },
];

type TechItem = {
  key: string;
  name: string;
  component: React.ReactNode;
  skill: string;
};

export default function TechStack() {
  function renderTechItems(items: TechItem[]) {
    return items.map((item) => (
      <div className="flex items-center space-x-3" key={item.key}>
        {item.component}
        <SkillBar percentage={item.skill} name={item.name} />
      </div>
    ));
  }

  return (
    <div className="space-y-4 font-medium text-lg">
      <h2 className="text-2xl font-medium">Check out my tech stack! 💻</h2> 
      <div className="space-y-3">
        <h3>Languages</h3>
        <div className="grid grid-cols-2 gap-3 w-full">
          {renderTechItems(LANGUAGES)}
        </div>
      </div>
      <div className="space-y-3">
        <h3>Frameworks/Libraries</h3>
        <div className="grid grid-cols-2 gap-3">
          {renderTechItems(FRAMEWORKS_AND_LIBRARIES)}
        </div>
      </div>
      <div className="space-y-3">
        <h3>Database</h3>
        <div className="grid grid-cols-2 gap-3">
          {renderTechItems(DATABASE)}
        </div>
      </div>
    </div>
  );
}
