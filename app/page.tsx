import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        <Categories />
        <SortPopup />
      </Container>
    </>
  );
}
