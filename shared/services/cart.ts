import { axiosInstance } from "@/shared/services/axios-instance";
import { Cart } from "@prisma/client";

export const fetchCart = async (): Promise<Cart> => {
  const { data } = await axiosInstance.get<Cart>("/cart");

  return data;
};
