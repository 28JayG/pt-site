import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "constants/environment.constants";
import { ApiResponse } from "types/api.types";

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const handleAxiosError = (error: unknown) => {
  if (error instanceof AxiosError) {
    return {
      success: false,
      error: {
        status: error.response?.status ?? 500,
        error: error.response?.data.error,
        message:
          error.response?.data.errors?.[0]?.message ||
          error.response?.data.errors?.message ||
          error.response?.data.message ||
          "something went wrong",
      },
    };
  }

  return {
    success: false,
    error: {
      status: 500,
      message: "something went wrong",
    },
  };
};

export const apiRequest = async <T>(
  cb: () => Promise<ApiResponse<T>>
): Promise<ApiResponse<T>> => {
  try {
    return await cb();
  } catch (error) {
    return handleAxiosError(error);
  }
};
