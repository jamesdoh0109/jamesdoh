"use client";

import Button from "@/components/common/Button";

export default function Admin() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[200px] flex flex-col space-y-3">
        <Button
          href="/admin/info"
          text="Edit personal details"
          color="toggle"
        />
        <Button href="/admin/projects" text="Manage projects" color="toggle" />
        <Button href="/admin/blogs" text="Manage blogs" color="toggle" />
      </div>
    </div>
  );
}
