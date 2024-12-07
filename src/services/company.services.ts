import { ENDPOINTS } from "constants/api.constants";
import { KnowYourCompany } from "types/company.types";
import { apiRequest, AxiosInstance } from "utils/api.utils";

export const getKnowYourCompany = async () =>
  await apiRequest<KnowYourCompany>(async () => {
    const response = await AxiosInstance.get(
      `${ENDPOINTS.company.knowYourCompany}?populate=*`
    );

    return { success: true, data: response.data.data };
  });
