import { Project } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";
import Summary from "@/components/Project/Summary";
import Card from "@/components/common/Card";

type DashboardProps = {
  projects: [string, Project][];
  title: string;
  isAdminView?: boolean;
  modal?: React.ReactNode;
};

export default function Dashboard({
  projects,
  title,
  isAdminView = false,
  modal,
}: DashboardProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-24 pb-12 space-y-6">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="grid grid-cols-1 project-md:grid-cols-2 project-lg:grid-cols-3 gap-9">
        {isAdminView && (
          <Card href="/admin/projects/new" cardForCreate>
            <div className="h-full w-full flex flex-col justify-center items-center">
              Create new
            </div>
          </Card>
        )}
        {projects.map(([projectId, project]) => (
          <Card
            key={projectId}
            href={`${
              isAdminView
                ? `/admin/projects/${projectId}`
                : `/projects/?showModal=true&id=${projectId}`
            }`}
          >
            <Summary
              name={project.name}
              date={formatDateRange(project.startDate, project.endDate)}
              description={project.description}
              imageLink={project.imageLink}
            />
          </Card>
        ))}
      </div>
      {modal}
    </div>
  );
}
