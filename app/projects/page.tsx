import { sortByEndDate } from "@/lib/utils";
import Dashboard from "@/components/Project/Dashboard";
import projects from "@/data/projects.json";

export default async function Projects() {
  const sortedProjects = sortByEndDate(projects)

  return (
    <Dashboard
      projects={sortedProjects}
      title="/projects 🧑‍💻"
    />
  );
}
