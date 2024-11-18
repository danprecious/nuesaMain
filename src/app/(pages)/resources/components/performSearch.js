import axios from "axios";

export const performSearch = async (
  searchValue,
  searchDepartment,
  searchLevel
) => {
  try {
    const url = `/api/fetchMaterials/page=${1}&limit=${20}`;
    console.log(url);
    let { data } = await axios.get(url, {
      params: {
        searchValue: searchValue || "",
        searchDepartment: searchDepartment || "",
        searchLevel: searchLevel || "",
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
