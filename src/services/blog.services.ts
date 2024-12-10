import { ENDPOINTS } from "constants/api.constants";
import { BlogPost } from "types/models";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchFeaturedBlogs = async () =>
  await apiRequest<BlogPost[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.blogs}?populate=*&filters[featured]=true`
    );

    return { data: response.data.data, success: true };
  });

export const fetchBlogs = async () =>
  await apiRequest<BlogPost[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.blogs}?populate=*&sort=publishedAt:desc`
    );

    return { data: response.data.data, success: true };
  });
