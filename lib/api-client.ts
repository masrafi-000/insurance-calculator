import axios from "axios";
import { handleError } from "./errors/handle-error";

export const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can attach tokens here later if needed
    // const token = useAuthStore.getState().token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(handleError(error));
  },
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data; // Return only the data portion by default
  },
  (error) => {
    // Centralized error handling
    const normalizedError = handleError(error);

    // You could also trigger a global toast notification here based on the error status
    // if (normalizedError.statusCode === 401) { ... }

    return Promise.reject(normalizedError);
  },
);
