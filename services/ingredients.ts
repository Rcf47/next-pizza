import { ApiRoutes } from "@/services/api-routes";
import { axiosInstance } from "@/services/axios-instance";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
