"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from "@/lib/validations";
import { Login } from "@/lib/types";

export default function Admin() {
  const [serverError, setServerError] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors: clientError },
  } = useForm<Login>({
    resolver: zodResolver(SignupFormSchema),
  });

  async function login(data: Login) {
    setServerError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        router.push("/admin");
      } else {
        const error = await res.json();
        setServerError(error.message);
      }
    } catch (err) {
      setServerError("An unexpected error occurred.");
    }
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit(login)}>
        <input {...register("email")} type="email" />
        {clientError.email && <p role="alert">{clientError.email.message}</p>}
        <input {...register("password")} type="password" />
        {clientError.password && (
          <p role="alert">{clientError.password.message}</p>
        )}
        {serverError && serverError}
        <button>Log in</button>
      </form>
    </div>
  );
}
