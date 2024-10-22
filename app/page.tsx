import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Пиццы"
              items={[
                {
                  id: 1,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 2,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 3,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 4,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 5,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 6,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Завтрак"
              items={[
                {
                  id: 7,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 8,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 9,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 10,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 11,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
                {
                  id: 12,
                  name: "Мясная-пицца",
                  imageUrl: "/pizza/pizza-1.avif",
                  price: 390,
                  items: [{ price: 390 }],
                },
              ]}
              categoryId={1}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
