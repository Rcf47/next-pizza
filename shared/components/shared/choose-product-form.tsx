import { Title } from "@/shared/components/shared/title";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  className?: string;
  onSubmit?: VoidFunction;
}

/* Форма выбора продукта */
export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  onSubmit,
  className,
  price,
}) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <Button
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
