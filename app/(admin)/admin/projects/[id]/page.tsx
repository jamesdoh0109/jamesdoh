import { getProjectById } from "@/lib/db";
import Form from "@/components/Project/Form";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);

  console.log(project)
  return (
    <div className="h-full flex justify-center items-center">
      <Form project={project} />
    </div>
  );
}
