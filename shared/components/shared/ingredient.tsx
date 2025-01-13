import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
}

export const Ingredient: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
