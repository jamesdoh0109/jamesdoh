import { NextRequest, NextResponse } from "next/server";
import { ref, get } from "firebase/database";
import { database } from "@/firebase/firebase";
import { User } from "@/lib/types";
import { createSession } from "@/lib/session";

const bcrypt = require("bcryptjs");

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const usersRef = ref(database, "users");
    const snapshot = await get(usersRef);

    const users: Record<string, User> = snapshot.val();
    const userEntry = Object.entries(users).find(
      ([_id, user]) => user.email === email
    );

    if (userEntry) {
      const [id, user] = userEntry;

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        await createSession(id);
        return NextResponse.json(
          {
            message: "User logged in successfully",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        message: "User not found",
      },
      { status: 404 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
