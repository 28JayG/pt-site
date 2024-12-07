import { ENDPOINTS } from "constants/api.constants";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchFeaturedBlogs = async () =>
  await apiRequest(async () => {
    const response = await AxiosInstance.get(`${ENDPOINTS.blogs}?populate=*`);

    return { data: response.data.data, success: true };
  });
