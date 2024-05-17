"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from "@/lib/validations";
import { Signup } from "@/lib/types";

export default function Admin() {
  const [serverError, setServerError] = useState(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors: clientError },
  } = useForm<Signup>({
    resolver: zodResolver(SignupFormSchema),
  });

  const login: SubmitHandler<Signup> = async (data) => {
    setServerError(null);
    
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      router.push("/admin");
    } else {
      const error = await res.json();
      setServerError(error.message);
    }
  };

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
