import { isAxiosError } from "axios";
import { ZodError } from "zod";
import { AppError } from "./app-error";

/**
 * Normalizes different types of errors (Axios, Zod, Unknown) into a uniform AppError
 */
export const handleError = (error: unknown): AppError => {
  // Pass through if it is already an AppError
  if (error instanceof AppError) {
    return error;
  }

  // Handle Axios HTTP Errors
  if (isAxiosError(error)) {
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.message || error.message || "Network Error";
    const errors = error.response?.data?.errors;
    return new AppError(message, status, errors);
  }

  // Handle Zod Validation Errors
  if (error instanceof ZodError) {
    return AppError.badRequest("Validation Error", error.flatten().fieldErrors);
  }

  // Handle standard JS Errors
  if (error instanceof Error) {
    return AppError.internal(error.message);
  }

  // Fallback map for unknown string or objects
  return AppError.internal("An unexpected error occurred");
};
