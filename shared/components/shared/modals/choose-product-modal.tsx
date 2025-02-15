"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "@/shared/components/shared/product-form";
import { Dialog } from "@/shared/components/ui";
import {
  DialogContent,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <VisuallyHidden asChild>
          <DialogTitle className="p-5 font-bold text-lg">
            Окно просмотра продукта
          </DialogTitle>
        </VisuallyHidden>
        <VisuallyHidden asChild>
          <DialogDescription>Выберите продукт</DialogDescription>
        </VisuallyHidden>

        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
