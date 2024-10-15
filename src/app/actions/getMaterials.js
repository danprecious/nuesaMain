import { GridFSBucket, MongoClient } from "mongodb";
import prisma from "../lib/prismadb";

const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("nuesaSiteResources");
const bucket = new GridFSBucket(db, { bucketName: "resources" });

export async function GetMaterials() {
  try {
    const materials = await prisma.material.findMany({
      include: {
        category: true,
      },
    });

    const fileCursor = bucket.find();
    const materialFiles = await fileCursor.toArray();

    console.log(fileCursor);

    const actualMaterials = materials.map((material) => {
      const materialFile = materialFiles.find(
        (file) => file._id.toString() === material.fileId
      );

      return {
        ...material,
        materialFile,
        materialFileData: [],
      };
    });

    for (const material of actualMaterials) {
      if (material.materialFile) {
        const downloadStream = bucket.openDownloadStream(
          material.materialFile._id
        );
        const chunks = [];

        for await (const chunk of downloadStream) {
          chunks.push(chunk);
        }

        material.materialFileData = Buffer.concat(chunks).toString("base64");
      } else {
        material.materialFileData = null;
      }
    }

    return actualMaterials;
  } catch (error) {
    console.log(error);
    return "Error fetching posts";
  }
}
