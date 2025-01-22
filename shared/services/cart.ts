import { axiosInstance } from "@/shared/services/axios-instance";
import { CartDTO } from "@/shared/services/dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data;
};

};
