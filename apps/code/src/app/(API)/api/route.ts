import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Welcome to the @codinasion/code API 🤗",
    routes: [
      {
        path: "/api/category",
        description:
          "List of all available categories of code for @codinasion/code npm package",
      },
      {
        path: "/api/code",
        description:
          "List of all available code for @codinasion/code npm package",
      },
    ],
  };

  return NextResponse.json({ data });
}
