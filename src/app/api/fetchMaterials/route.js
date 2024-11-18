import { GetMaterials } from "@/app/actions/getMaterials";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("search api reached");
  const { searchParams } = new URL(await request.url);
  
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;
  console.log(page, limit);

  console.log(searchParams);

  const searchValue = searchParams.get("searchValue");
  const categoryItem = searchParams.get("category");
  const level = searchParams.get("searchLevel");
  const department = searchParams.get("searchDepartment");

  const searchData =
    searchValue || categoryItem || level || department
      ? { searchValue, categoryItem, level, department }
      : null;


  try {
    const materials = await GetMaterials(searchData, page, limit);
    console.log(materials);
    return NextResponse.json(materials, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(error, { status: 500 });
  }
}
