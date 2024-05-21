import { Globe } from "lucide-react";
import { isValidHttpUrl } from "@/lib/utils";
import Github from "@/components/svg/Github";
import Anchor from "@/components/common/Anchor";

type DetailsProps = {
  name: string;
  date: string;
  description: string;
  imageLink: string;
  projectLink: string;
  githubLink: string;
};

export default function Details({
  name,
  date,
  description,
  projectLink,
  githubLink,
}: DetailsProps) {
  return (
    <div className="h-full w-full space-y-3 text-black">
      <div className="flex flex-col">
        <h3 className="text-xl font-medium">{name}</h3>
        <span className="text-grey-2 text-sm italic">{date}</span>
      </div>
      <div className="text-base">{description}</div>
      <div className="space-y-1 text-sm">
        <div className="flex items-center space-x-2">
          <Github className="w-4 h-4" />
          {isValidHttpUrl(githubLink) ? (
            <Anchor href={githubLink} text="Link to repository" color="blue" />
          ) : (
            <span>Link unavailable - {githubLink}</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          {isValidHttpUrl(projectLink) ? (
            <Anchor href={projectLink} text="Link to project" color="blue" />
          ) : (
            <span>Link unavailable - {projectLink}</span>
          )}
        </div>
      </div>
    </div>
  );
}
