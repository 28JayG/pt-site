import { ENDPOINTS } from "constants/api.constants";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchTopCompanies = async () =>
  await apiRequest(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.companies}?populate=*&filter[featured]=true`
    );
    return { success: true, data: response.data.data };
  });
