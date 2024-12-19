import { ApiRoutes } from "@/services/api-routes";
import { axiosInstance } from "@/services/axios-instance";
import { Product } from "@prisma/client";

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product>(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query },
  });

  return data;
};
