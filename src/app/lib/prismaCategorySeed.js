import prisma from "./prismadb";

export async function upsertCategory() {
  const categories = [
    { name: "Thermodynamics" },
    { name: "Engineering Mathematics" },
    { name: "Control Systems" },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name }, // Look for category by name
      update: { name: category.name },
      create: { name: category.name }, // If not found, create a new one
    })
  }

  console.log("Upsert completed");
}

