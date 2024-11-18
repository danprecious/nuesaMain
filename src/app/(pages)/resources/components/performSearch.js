import axios from "axios";

export const performSearch = async (
  searchValue,
  searchDepartment,
  searchLevel
) => {
  try {
    const url = `/api/fetchMaterials/`;
    console.log(url);
    let { data } = await axios.get(url, {
      params: {
        searchValue: searchValue || "",
        searchDepartment: searchDepartment || "",
        searchLevel: searchLevel || "",
        page: 1,
        limit: 20
      },
    });

const materials = await data.materials;

    console.log(materials);
    return materials;
  } catch (error) {
    console.error(error);
    return error;
  }
};
