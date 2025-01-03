"use client";

import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { RangeSlider } from "@/components/shared/range-slider";
import { Title } from "@/components/shared/title";
import { Input } from "@/components/ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import React from "react";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useFilterIngredients();
  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={0}
          />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
        <CheckboxFiltersGroup
          title="Ингредиенты"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={(id) => console.log(id)}
        />
      </div>
    </div>
  );
};
