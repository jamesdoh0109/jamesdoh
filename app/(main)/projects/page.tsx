import { getProjects } from "@/lib/db";
import { Project } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";
import Card from "@/components/Project/Card";
import Modal from "@/components/common/Modal";
import Details from "@/components/Project/Details";

type ProjectsProps = {
  searchParams: Record<string, string> | null | undefined;
};

const renderProjectCard = (project: Project, id: string) => (
  <Card
    key={id}
    id={id}
    name={project.name}
    date={formatDateRange(project.startDate, project.endDate)}
    description={project.description}
    imageLink={project.imageLink}
  />
);

const renderProjectDetails = (project: Project) => (
  <Details
    name={project.name}
    date={formatDateRange(project.startDate, project.endDate)}
    description={project.description}
    imageLink={project.imageLink}
    projectLink={project.projectLink}
    githubLink={project.githubLink}
  />
);

export default async function Projects({ searchParams }: ProjectsProps) {
  const { modal, id } = searchParams || {};

  const projects: Record<string, Project> = await getProjects();

  return (
    <div className="w-full flex flex-col items-center justify-center pt-32 pb-12 space-y-6">
      <h1 className="text-3xl font-medium">/projects 🧑‍💻</h1>
      <div className="grid grid-cols-1 project-md:grid-cols-2 project-lg:grid-cols-3 laptop:gap-9 gap-5">
        {Object.entries(projects).map(([projectId, project]) =>
          renderProjectCard(project, projectId)
        )}
      </div>
      {modal && <Modal>{renderProjectDetails(projects[id])}</Modal>}
    </div>
  );
}
