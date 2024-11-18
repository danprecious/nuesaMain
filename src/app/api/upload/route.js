import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

import { PrismaClient } from "@prisma/client";
import { gridFsStoreFile } from "@/app/actions/gridFsStore";
import { CreateMaterial } from "@/app/actions/createNewMaterial";
import { cloudinaryUpload } from "@/app/actions/cloudinaryUpload";

// const prisma = new PrismaClient();

export async function POST(request) {
  // Get data from request
  const data = await request.formData();

  console.log(data);
  try {
    // Get the actual file
    const file = data.get("file");
    const categoryItem = data.get("category");
    const level = data.get("level");
    const department = data.get("department"); 
    const materialType = data.get("materialType");


    const filename = file.name;

    const existingFile = await prisma.material.findFirst({
      where: { title: filename },
    });

    if (!existingFile) {
      const id = await cloudinaryUpload(file);
      console.log(id);
      const newMaterial = await CreateMaterial(filename, id, categoryItem, level, department, materialType);
      console.log(newMaterial);
      return NextResponse.json(newMaterial, { status: 200 });
    } else {
      return NextResponse.json("Material already exists", { status: 200 });
    }

    
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
