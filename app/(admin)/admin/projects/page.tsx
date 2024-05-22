import { getProjects } from "@/lib/db";
import { Project } from "@/lib/types";
import { sortByEndDate } from "@/lib/utils";
import Dashboard from "@/components/Project/Dashboard";

export default async function Projects() {
  const projects: Record<string, Project> = await getProjects();

  const sortedProjects = Object.entries(projects).sort(sortByEndDate);

  return (
    <Dashboard
      projects={sortedProjects}
      title="/admin/projects 🧑‍💻"
      isAdminView
    />
  );
}
