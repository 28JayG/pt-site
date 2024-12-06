export interface ErrorResponseObject {
  status?: number;
  message: string;
  error?: string[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: ErrorResponseObject;
}
