import { ProductCard } from "@/components/shared/product-card";
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  categoryId: number;
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  categoryId,
  title,
  items,
  className,
  listClassName,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
