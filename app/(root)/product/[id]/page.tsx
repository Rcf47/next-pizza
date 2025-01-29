import { Container } from "@/shared/components/shared/container";
import { notFound } from "next/navigation";
import { ProductForm } from "@/shared/components/shared/product-form";
import { prisma } from "@/prisma/prisma-client";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: { products: { include: { items: true } } },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
