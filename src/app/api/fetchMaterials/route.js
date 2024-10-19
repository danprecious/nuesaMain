import { GetMaterials } from "@/app/actions/getMaterials";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  if (!searchParams) {
    try {
      const materials = GetMaterials();
      return new NextResponse(materials, { status: 200 });
    } catch (error) {
      return new NextResponse(error, { status: 500 });
    }
  } else {
    const searchValue = searchParams.get("searchValue");
    const categoryItem = searchParams.get("category");
    const level = searchParams.get("searchLevel");
    const department = searchParams.get("searchDepartment");

    const searchData = {
      searchValue,
      categoryItem,
      level,
      department,
    };
    console.log("search api reached")
    try {
      const materials = await GetMaterials(searchData);
      console.log(materials);
      return new NextResponse(materials, { status: 200 });
    } catch (error) {
      return new NextResponse(error, { status: 500 });
    }
  }
}
