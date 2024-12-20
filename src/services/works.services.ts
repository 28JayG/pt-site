import { ENDPOINTS } from "constants/api.constants";
import { Service, Work } from "types/models";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchFeaturedWorks = async () =>
  await apiRequest<Work[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.works}?populate=*&filters[featured][$eq]=true`
    );
    return { success: true, data: response.data.data };
  });

export const fetchServiceDetails = async (service: string) =>
  await apiRequest<Service>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.services}?populate=*&filters[slug][$eq]=${service}`
    );

    return { success: true, data: response.data.data[0] };
  });
