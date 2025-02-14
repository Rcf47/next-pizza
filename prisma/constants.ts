export const categories = [
  { name: "Пиццы" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
];

export const _ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "/assets/images/ingredients/sirniybortik.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient1.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient2.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient3.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient4.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient17.png",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient5.png",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient6.png",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient7.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient8.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient9.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient10.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient11.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient12.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/assets/images/ingredients/ingredient13.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/assets/images/ingredients/ingredient14.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient15.png",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "/assets/images/ingredients/ingredient16.png",
  },
].map((ingredient, index) => ({ id: index + 1, ...ingredient }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/assets/images/breakfast/omletsvetchinoyigribami.avif",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/assets/images/breakfast/omletspeperoni.avif",
    categoryId: 2,
  },
  {
    name: "Омлет сырный",
    imageUrl: "/assets/images/breakfast/omletsirniy.avif",
    categoryId: 2,
  },
  {
    name: "Креветки",
    imageUrl: "/assets/images/snacks/krevetki.avif",
    categoryId: 3,
  },
  {
    name: "Омлет с ветчиной и грибами в пите",
    imageUrl: "/assets/images/snacks/omletsvetchinoyigribamivpite.avif",
    categoryId: 3,
  },
  {
    name: "Омлет с беконом в пите",
    imageUrl: "/assets/images/snacks/omletsbekonomvpite.avif",
    categoryId: 3,
  },
  {
    name: "Шоколадный молочный коктейль",
    imageUrl: "/assets/images/cocktail/shokoladnomolochniykoktel.avif",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl: "/assets/images/cocktail/klassicheskiykoktel.avif",
    categoryId: 4,
  },
  {
    name: "Клубничный молочный коктейль",
    imageUrl: "/assets/images/cocktail/klubnichniykoktel4.png",
    categoryId: 4,
  },
  {
    name: "Какао",
    imageUrl: "/assets/images/drinks/kakao.avif",
    categoryId: 5,
  },
  {
    name: "Добрый Кола",
    imageUrl: "/assets/images/drinks/dobriykola.avif",
    categoryId: 5,
  },
  {
    name: "Вода BonaAqua негазированная",
    imageUrl: "/assets/images/drinks/vodabonaqua.avif",
    categoryId: 5,
  },
];
