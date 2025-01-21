import { CartStateItem } from "@/shared/lib/get-cart-details";

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  // Получение товаров из корзины
  fetchCartItems: () => Promise<void>;

  // Запрос на обновление количества товаров
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  // Запрос на добавление товара в корзину
  addCartItem: (values: CreateCartItemValues) => Promise<void>;

  // Запрос на удаление товара из корзины
  removeCartItem: (id: number) => Promise<void>;
}
