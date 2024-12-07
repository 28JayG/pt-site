import { ENDPOINTS } from "constants/api.constants";
import { Review } from "types/models";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchTopReviews = async () =>
  await apiRequest<Review[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.reviews}?populate=*&filter[featured]=true`
    );

    return { success: true, data: response.data.data };
  });
