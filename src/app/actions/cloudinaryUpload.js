import { raw } from "@prisma/client/runtime/library";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dvjlckdam",
  api_key: "676657359276124",
  api_secret: "x9sk7MfBw9Ztk77-ewyf_klvUzc", 
});

export async function cloudinaryUpload(file) {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Data = `data:${file.type};base64,${buffer.toString("base64")}`;

    const uploadResult = await cloudinary.uploader.upload(base64Data, {
      public_id: file.name.split(".")[0],
      folder: "nuesaDocuments",
      resource_type: "raw"
    });

    console.log("file uploaded sucessfully", uploadResult);
    return uploadResult.public_id;
  } catch (error) {
    console.error(error);
    throw new Error("Error uploading file to storage");
  }
}

//    // Optimize delivery by resizing and applying auto-format and auto-quality
//    const optimizeUrl = cloudinary.url('shoes', {
//     fetch_format: 'auto',
//     quality: 'auto'
// });

// console.log(optimizeUrl);

// // Transform the image: auto-crop to square aspect_ratio
// const autoCropUrl = cloudinary.url('shoes', {
//     crop: 'auto',
//     gravity: 'auto',
//     width: 500,
//     height: 500,
// });

// console.log(autoCropUrl);
