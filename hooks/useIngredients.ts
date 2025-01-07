import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

type IngredientItem = Pick<Ingredient, "id" | "name">;

interface Ingredients {
  ingredients: IngredientItem[];
}

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<
    Ingredients["ingredients"]
  >([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((ingredient) => ({
            id: ingredient.id,
            name: ingredient.name,
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);
  return { ingredients, loading };
};
