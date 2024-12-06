import { ENDPOINTS } from "constants/api.constants";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const fetchFooterSections = async () =>
  await apiRequest(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.footer.sections}?populate=links`
    );

    return { success: true, data: response.data.data };
  });

export const fetchEnquiries = async () =>
  await apiRequest(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.footer.enquiries}?populate=links`
    );

    return { success: true, data: response.data.data };
  });
