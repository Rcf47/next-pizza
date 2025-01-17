import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param type Тип пиццы
 * @param size Размер пиццы
 * @param items Список пицц
 * @param ingredients Список ингредиентов
 * @param selectedIngredients Список выбранных ингредиентов
 *
 * @returns number Общая стоимость пиццы
 */

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((item) => selectedIngredients.has(item.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
