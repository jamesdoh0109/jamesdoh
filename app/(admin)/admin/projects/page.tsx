import Card from "@/components/Admin/Card";
import Button from "@/components/common/Button";
import { getProjects } from "@/lib/db";
import { Project } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";

export default async function Projects() {
  const projects: Record<string, Project> = await getProjects();

  return (
    <div className="w-full flex justify-center pt-24 pb-12">
      <div className="flex flex-col w-1/2 space-y-5">
        <div className="self-end">
          <Button text="Add New" href="/admin/projects/new" color="toggle" />
        </div>
        <div className="w-full flex flex-col space-y-2">
          {Object.entries(projects).map(([projectId, project]) => (
            <Card
              key={projectId}
              href={`/admin/projects/edit/${projectId}`}
              name={project.name}
              date={formatDateRange(project.startDate, project.endDate)}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
