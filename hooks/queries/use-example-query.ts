import { apiClient } from "@/lib/api-client";
import { AppError } from "@/lib/errors/app-error";
import { useQuery } from "@tanstack/react-query";

interface ExampleData {
  id: number;
  title: string;
}

const fetchExampleData = async (): Promise<ExampleData[]> => {
  return await apiClient.get<unknown, ExampleData[]>("/example");
};

export const useExampleQuery = () => {
  return useQuery<ExampleData[], AppError>({
    queryKey: ["exampleData"],
    queryFn: fetchExampleData,
  });
};
