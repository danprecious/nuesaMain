export async function CreateMaterial(
  filename,
  id,
  categoryItem,
  level,
  department
) {
  try {
    const material = await prisma.material.upsert({
      where: { title: filename },
      update: {
        title: filename,
        fileId: id,
        level: level,
        department: department,
        category: { connect: { name: categoryItem } },
      },
      create: {
        title: filename,
        fileId: id,
        level: level,
        department: department,
        category: {
          connect: { name: categoryItem },
        },
      },
    });

    return material;
  } catch (error) {
    console.log(error);
    return error;
  }
}
