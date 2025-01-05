"use client";

import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";
import { RangeSlider } from "@/components/shared/range-slider";
import { Title } from "@/components/shared/title";
import { Input } from "@/components/ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import React from "react";
import { useSet } from "react-use";
import qs from "qs";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onToggleId, selectedValues } =
    useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );

  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...price, [name]: value });
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selectedValues={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selectedValues={sizes}
        items={[
          { text: "20см", value: "20" },
          { text: "30см", value: "30" },
          { text: "40см", value: "40" },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(event) =>
              updatePrice("priceFrom", Number(event.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(price.priceTo)}
            onChange={(event) =>
              updatePrice("priceTo", Number(event.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
        <CheckboxFiltersGroup
          title="Ингредиенты"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={onToggleId}
          selectedValues={selectedValues}
          name="ingredients"
        />
      </div>
    </div>
  );
};
