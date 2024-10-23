"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  className?: string;
}
const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category, index) => (
        <Link
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === index &&
              "bg-white shadow-md shadown-gray-200 text-primary"
          )}
          key={uuidv4()}
          href=""
        >
          <button>{category}</button>
        </Link>
      ))}
    </div>
  );
};
