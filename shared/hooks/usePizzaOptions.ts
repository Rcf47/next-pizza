import { Variant } from "@/shared/components/shared/group-variants";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { getAvailablePizzaSizes } from "@/shared/lib/get-available-pizza-sizes";
import { ProductItem } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availableSizes: Variant[];
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailablePizzaSizes(type, items);

  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availabelSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availabelSize) {
      setSize(Number(availabelSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availableSizes,
  };
};
