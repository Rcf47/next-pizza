import { Prisma } from "@prisma/client";
import { categories, ingredients, products } from "../prisma/constants";
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
    data: ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });

  //Сделал как обычные объекты, так и через функцию для практики
  await prisma.productItem.createMany({
    data: [
      generatePizza({ productId: 1, pizzaType: 1, size: 20 }),
      generatePizza({ productId: 1, pizzaType: 2, size: 30 }),
      generatePizza({ productId: 1, pizzaType: 2, size: 40 }),

      generatePizza({ productId: 2, pizzaType: 1, size: 20 }),
      generatePizza({ productId: 2, pizzaType: 2, size: 30 }),
      generatePizza({ productId: 2, pizzaType: 2, size: 40 }),

      generatePizza({ productId: 3, pizzaType: 1, size: 20 }),
      generatePizza({ productId: 3, pizzaType: 2, size: 30 }),
      generatePizza({ productId: 3, pizzaType: 2, size: 40 }),

      generatePizza({ productId: 4 }),
      generatePizza({ productId: 5 }),
      generatePizza({ productId: 6 }),
      generatePizza({ productId: 7 }),
      generatePizza({ productId: 8 }),
      generatePizza({ productId: 9 }),
    ],
  });
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
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
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
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
