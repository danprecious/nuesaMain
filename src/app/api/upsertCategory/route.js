import { upsertCategory } from "@/app/lib/prismaCategorySeed";
import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await upsertCategory();
    return NextResponse.json("Category uploaded", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
