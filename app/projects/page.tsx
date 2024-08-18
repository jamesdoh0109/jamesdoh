import Dashboard from "@/components/Project/Dashboard";
import projects from "@/data/projects.json";

export default async function Projects() {
  return <Dashboard projects={projects} title="/projects 🧑‍💻" />;
}
