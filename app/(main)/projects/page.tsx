import { getProjects } from "@/lib/db";
import { Project } from "@/lib/types";
import { formatDateRange, sortByEndDate } from "@/lib/utils";
import Modal from "@/components/common/Modal";
import Details from "@/components/Project/Details";
import Dashboard from "@/components/Project/Dashboard";

type ProjectsProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Projects({ searchParams }: ProjectsProps) {
  const { showModal, id } = searchParams || {};

  const projects: Record<string, Project> = await getProjects();

  const sortedProjects = Object.entries(projects).sort(sortByEndDate);

  const modal = () => {
    const {
      name,
      startDate,
      endDate,
      description,
      imageLink,
      projectLink,
      githubLink,
    } = projects[id];

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
    <Dashboard
      projects={sortedProjects}
      title="/projects 🧑‍💻"
      modal={showModal && modal()}
    />
  );
}
