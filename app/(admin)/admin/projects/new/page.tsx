"use client"

export default function Page() {
  const post = () => {
    fetch("/api/projects", {
      method: "POST"
    })
  }
  return <div className="h-full flex justify-center items-center" onClick={post}>New</div>;
}
