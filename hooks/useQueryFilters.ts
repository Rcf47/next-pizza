import { PriceProps } from "@/hooks/useFilters";
import { useRouter } from "next/navigation";
import qs from "qs";
import React from "react";

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  price: PriceProps;
}

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.price,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const query = qs.stringify(params, { arrayFormat: "comma" });
    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
};
