import { axiosInstance } from "@/services/axios-instance";
import { Product } from "@prisma/client";

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product>("/products/search", {
    params: { query },
  });

  return data;
};
