"use client";

import { useFormStatus } from "react-dom";

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending}>
      {pending ? "Submitting..." : "Sign up"}
    </button>
  );
}
