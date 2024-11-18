import prisma from "../lib/prismadb";

export async function CreateMaterial(
  filename,
  id,
  categoryItem,
  level,
  department,
  materialType
) {
  try {
    const material = await prisma.material.upsert({
      where: { title: filename }, 
      update: {
        title: filename,
        fileId: id,
        level: level,
        department: department,
        materialType: materialType,
        category: { connect: { name: categoryItem } },
      },
      create: {
        title: filename,
        fileId: id,
        level: level,
        department: department,
        materialType: materialType,
        category: {
          connect: { name: categoryItem },
        },
      },
    });

    return material;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
