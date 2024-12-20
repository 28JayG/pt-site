import { API_BASE_URL } from "constants/environment.constants";

export const getImageUrl = (url: string): string =>
  `${API_BASE_URL?.replace("api", "")}${url}`;
