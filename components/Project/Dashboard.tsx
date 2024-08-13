"use client";

import { useModal } from "@/context/ModalProvider";
import { Project } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";
import Summary from "@/components/Project/Summary";
import Card from "@/components/common/Card";
import Modal from "@/components/common/Modal";
import Details from "@/components/Project/Details";

type DashboardProps = {
  projects: Record<string, Project>;
  title: string;
};

export default function Dashboard({ projects, title }: DashboardProps) {
  const { id, setId } = useModal();

  const modal = () => {
    const {
      name,
      startDate,
      endDate,
      description,
      imageLink,
      projectLink,
      githubLink,
    } = projects[id!];

    return (
      <Modal>
        <Details
          name={name}
          date={formatDateRange(startDate, endDate)}
          description={description}
          imageLink={imageLink}
          projectLink={projectLink}
          githubLink={githubLink}
        />
      </Modal>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-24 pb-12 space-y-6">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="grid grid-cols-1 project-md:grid-cols-2 project-lg:grid-cols-3 gap-9">
        {Object.entries(projects).map(([projectId, project]) => (
          <Card key={projectId} onClick={() => setId(projectId)}>
            <Summary
              name={project.name}
              date={formatDateRange(project.startDate, project.endDate)}
              description={project.description}
              imageLink={project.imageLink}
            />
          </Card>
        ))}
      </div>
      {id && modal()}
    </div>
  );
}
