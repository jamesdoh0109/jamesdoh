"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Project, ProjectForm } from "@/lib/types";
import { ProjectFormSchema } from "@/lib/validations";
import Button from "@/components/common/Button";

type FormProps = {
  project?: Project;
};

export default function Form({ project }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors: clientError },
  } = useForm<ProjectForm>({
    resolver: zodResolver(ProjectFormSchema),
  });

  function createOrEditProject() {}

  return (
    <div>
      <form
        className="flex flex-col space-y-2"
        onSubmit={handleSubmit(createOrEditProject)}
      >
        <input {...register("name")} />
        {clientError.name && <p role="alert">{clientError.name.message}</p>}
        <input {...register("startDate")} />
        {clientError.startDate && (
          <p role="alert">{clientError.startDate.message}</p>
        )}
        {clientError.endDate && (
          <p role="alert">{clientError.endDate.message}</p>
        )}
        <input {...register("description")} />
        {clientError.description && (
          <p role="alert">{clientError.description.message}</p>
        )}
        <input {...register("projectLink")} />
        {clientError.projectLink && (
          <p role="alert">{clientError.projectLink.message}</p>
        )}
        <input {...register("image")} type="file" />
        {clientError.image && <p role="alert">{clientError.image.message}</p>}
        <Button text={`${project ? "Edit" : "Create"}`} color="toggle" />
      </form>
    </div>
  );
}
