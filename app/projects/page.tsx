import Card from "@/components/Project/Card";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-32 pb-12 space-y-6">
      <h1 className="text-3xl font-medium">/projects 🧑‍💻</h1>
      <div className="grid grid-cols-1 project-md:grid-cols-2 project-lg:grid-cols-3 laptop:gap-9 gap-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            name={project.name}
            description={project.description}
            date={project.date}
            imagePath={project.imagePath}
          />
        ))}
      </div>
    </div>
  );
}
