export async function getProjects() {
  const res = await fetch(process.env.URL + "/api/projects");
  const data = await res.json();

  return data.projects;
}

export async function getProjectById(id: string) {
  const res = await fetch(`${process.env.URL}/api/projects/${id}`);
  const data = await res.json();

  return data.project;
}
