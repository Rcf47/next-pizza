import { Prisma } from "@prisma/client";
import { _ingredients, categories, products } from "../prisma/constants";
import { prisma } from "../prisma/prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generatePizza = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function generateData() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Vadim",
        email: "vadim@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: _ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "/pizza/peperonifresh.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "/pizza/sirnaya.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "/pizza/chorizofresh.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  //Сделал как обычные объекты, так и через функцию для практики
  await prisma.productItem.createMany({
    data: [
      // Пицца Пепперони фреш
      generatePizza({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generatePizza({ productId: pizza1.id, pizzaType: 1, size: 30 }),
      generatePizza({ productId: pizza1.id, pizzaType: 1, size: 40 }),
      generatePizza({ productId: pizza1.id, pizzaType: 2, size: 20 }),
      generatePizza({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generatePizza({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      // Пицца Сырная
      generatePizza({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generatePizza({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generatePizza({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      generatePizza({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generatePizza({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generatePizza({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      // Пицца Чоризо фреш
      generatePizza({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generatePizza({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generatePizza({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      // Прочие продукты
      generatePizza({ productId: 1 }),
      generatePizza({ productId: 2 }),
      generatePizza({ productId: 3 }),
      generatePizza({ productId: 4 }),
      generatePizza({ productId: 5 }),
      generatePizza({ productId: 6 }),
      generatePizza({ productId: 7 }),
      generatePizza({ productId: 8 }),
      generatePizza({ productId: 9 }),
      generatePizza({ productId: 10 }),
      generatePizza({ productId: 11 }),
      generatePizza({ productId: 12 }),
    ],
  });
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 650,
        token: "111111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });
  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function clearData() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}
async function main() {
  try {
    await clearData();
    await generateData();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
