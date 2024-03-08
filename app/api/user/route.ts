// import { connectMongoDb } from "@/lib/mongodb";
// import User from "@/models/user";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { name, email } = await request.json();
//   await connectMongoDb();
//   await User.create({ name, email });
//   return NextResponse.json(
//     { message: "User created successfully" },
//     { status: 201 }
//   );
// }

import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();
  await connectMongoDb();
  await User.create({ name, email });
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
