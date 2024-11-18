import { GridFSBucket, MongoClient } from "mongodb";
import prisma from "../lib/prismadb";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dvjlckdam",
  api_key: "676657359276124",
  api_secret: "x9sk7MfBw9Ztk77-ewyf_klvUzc",
});

const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("nuesaSiteResources");
const bucket = new GridFSBucket(db, { bucketName: "resources" });

export async function GetMaterials(searchData, page, limit) {
  console.log("at getMaterials function", searchData);

  const skip = (page - 1) * limit;

  if (!searchData) {
    try {
      const totalMaterials = await prisma.material.count();
      const materials = await prisma.material.findMany({
        skip,
        take: limit,
        include: {
          category: true,
        },
      });

      const materialsWithCloudFiles = materials.map((material) => {
        return {
          ...material,
          fileUrl: cloudinary.url(material.fileId, {
            resource_type: "raw",
            quality: "auto",
            fetch_format: "auto",
          }),
        };
      });

      return {
        materials: materialsWithCloudFiles,
        total: totalMaterials,
        page,
        limit,
      };
    } catch (error) {
      console.error(error);
      return "Error all fetching posts ";
    }
  } else {
    try {
      const totalMaterials = await prisma.material.count({
        where: {
          OR: [
            {
              title: { contains: searchData.searchValue, mode: "insensitive" },
            },
            { level: { contains: searchData.level, mode: "insensitive" } },
            {
              department: {
                contains: searchData.department,
                mode: "insensitive",
              },
            },
          ],
        },
      });
      const materials = await prisma.material.findMany({
        where: {
          OR: [
            {
              title: { contains: searchData.searchValue, mode: "insensitive" },
            },
            { level: { contains: searchData.level, mode: "insensitive" } },
            {
              department: {
                contains: searchData.department,
                mode: "insensitive",
              },
            },
          ],
        },
        skip,
        take: limit,
        // orderBy: { createdAt: "desc" },
        include: {
          category: true,
        },
      });

      const materialsWithCloudFiles = materials.map((material) => {
        return {
          ...material,
          fileUrl: cloudinary.url(material.fileId, {
            resource_type: "raw",
            quality: "auto",
            fetch_format: "auto",
          }),
        };
      });

      
        return {
          materials: materialsWithCloudFiles,
          total: totalMaterials,
          page,
          limit,
        };
    
    } catch (error) {
      console.log(error);
      return "Error fetching posts";
    }
  }
}
