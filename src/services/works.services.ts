import { ENDPOINTS } from "constants/api.constants";
import { Work } from "types/models";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchFeaturedWorks = async () =>
  await apiRequest<Work[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.works}?populate=*&filters[featured][$eq]=true`
    );
    return { success: true, data: response.data.data };
  });
