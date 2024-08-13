"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Project, ProjectForm } from "@/lib/types";
import { ProjectFormSchema } from "@/lib/validations";
import Button from "@/components/common/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormProps = {
  project?: Project;
};

export default function Form({ project }: FormProps) {
  const [serverError, setServerError] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors: clientError },
  } = useForm<ProjectForm>({
    resolver: zodResolver(ProjectFormSchema),
  });

  async function createOrEditProject(data: ProjectForm) {
    setServerError(null);

    const formData = new FormData();

    for (const key in data) {
      if (key === "image") {
        const fileList = data[key as keyof ProjectForm] as FileList;
        formData.append(key, fileList[0]);
      } else {
        formData.append(key, data[key as keyof ProjectForm] as string);
      }
    }

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        //router.push("/admin/projects");
      } else {
        const error = await res.json();
        setServerError(error.message);
      }
    } catch (err) {
      setServerError("An unexpected error occurred.");
    }
  }

  return (
    <div>
      <form
        className="flex flex-col space-y-2"
        onSubmit={handleSubmit(createOrEditProject)}
      >
        <input {...register("name")} />
        {clientError.name && <p role="alert">{clientError.name.message}</p>}
        <input {...register("startDate")} type="month" />
        {clientError.startDate && (
          <p role="alert">{clientError.startDate.message}</p>
        )}
        <input {...register("endDate")} type="month" />
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
        <input {...register("githubLink")} />
        {clientError.githubLink && (
          <p role="alert">{clientError.githubLink.message}</p>
        )}
        <input {...register("image")} type="file" accept="image/*" />
        {clientError.image && <p role="alert">{clientError.image.message}</p>}
        <Button text={`${project ? "Edit" : "Create"}`} color="toggle" />
      </form>
    </div>
  );
}
