export type Signup = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  password: string;
};

export type Project = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  imageLink: string;
  projectLink: string;
  githubLink: string;
};

export type Projects = {
  [id: string]: Project;
};

export type ProjectForm = {
  startDate: string;
  endDate: string;
  name: string;
  image: string;
  projectLink: string;
  description: string;
};

export type ButtonColor = "black" | "white" | "toggle";

export type AnchorColor = "blue" | "light-blue" | "toggle";
