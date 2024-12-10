import { ENDPOINTS } from "constants/api.constants";
import { Service, TechCategory } from "types/models";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchServices = async () =>
  await apiRequest<Service[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.services}?populate=*`
    );

    return { success: true, data: response.data.data };
  });

export const fetchTechCategories = async () =>
  await apiRequest<TechCategory[]>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.techCategories}?populate=*`
    );

    return { success: true, data: response.data.data };
  });