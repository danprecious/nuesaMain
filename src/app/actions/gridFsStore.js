const fs = require("fs");
const path = require("path");
const os = require("os");

// import prisma from "@/app/libs/prismadb";

import { GridFSBucket, MongoClient } from "mongodb";

const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("nuesaSiteResources");
const bucket = new GridFSBucket(db, { bucketName: "resources" });

export const gridFsStoreFile = async (file) => {
  const uniqueFileName = new Date().getTime() + "-" + file.name;
  // store in a temporary location in storage
  const tempFilePath = path.join(os.tmpdir(), uniqueFileName);

  // create buffer and write file to fileSystem
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(tempFilePath, buffer);

  // open a stream from the bucket to enable uplaod
  const uploadStream = bucket.openUploadStream(uniqueFileName);

  const fileItem = await db
    .collection("resources.files")
    .findOne({ _id: uploadStream.id });

  if (!fileItem) {
    // pipe the file from fs to the bucket

    fs.createReadStream(tempFilePath)
      .pipe(uploadStream)
      .on("error", (error) => {
        console.log("Error uploading file");
      })
      .on("finish", (file) => {
        console.log("File uploaded succefully");
        const fileId = uploadStream.id;
        console.log(fileId);
        // cleanup temporary filePath from memory
        fs.unlinkSync(tempFilePath);
        return fileId;
      });
  }

  // LOGS
  console.log(fileItem);
  console.log(uploadStream.id);
  return uploadStream.id;
  console.log(tempFilePath);
  console.log(file);
  console.log(file.name);
  console.log(uniqueFileName);
};
