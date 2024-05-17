import { NextRequest, NextResponse } from "next/server";
import { database } from "@/firebase/firebase";
import { ref, get } from "firebase/database";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projectRef = ref(database, `projects/${params.id}`);
    const snapshot = await get(projectRef);

    const project = snapshot.val();
    const projectFormatted = {
      id: params.id,
      date: project.date,
      description: project.description,
      imageLink: project.imageLink,
      name: project.name,
      projectLink: project.projectLink,
    };

    return NextResponse.json(
      {
        project: projectFormatted,
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
