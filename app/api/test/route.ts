const data = [
  {
    id: 1,
    title: "Example 1",
  },
  {
    id: 2,
    title: "Example 2",
  },
  {
    id: 3,
    title: "Example 3",
  },
];

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data);
}
