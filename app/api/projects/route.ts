import { NextRequest, NextResponse } from "next/server";
import { database } from "@/firebase/firebase";
import { ref, set, get } from "firebase/database";
import { uid } from "uid";

export async function GET(_req: NextRequest) {
  try {
    const projectsRef = ref(database, "projects");
    const snapshot = await get(projectsRef);

    const projects = snapshot.val();

    return NextResponse.json(
      {
        projects: projects,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  //const { name, date, description, projectLink, image } = await req.json();

  const uuid = uid();

  const imageLink =
    "https://firebasestorage.googleapis.com/v0/b/personal-web-68801.appspot.com/o/string-search-visualizer.png?alt=media&token=7a4e3260-a5f0-45bb-a859-5b5c26d12cb4";

  try {
    const projectsRef = ref(database, `projects/${uuid}`);
    set(projectsRef, {
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      projectLink: "",
      imageLink,
    });

    return NextResponse.json(
      {
        message: "Project created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
