import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const orders = [
    { customer: "John Doe", status: "Pending" },
    { customer: "Jane Smith", status: "Shipped" },
    { customer: "Alice Johnson", status: "Delivered" },
    { customer: "Bob Brown", status: "Cancelled" },
    { customer: "Charlie Davis", status: "Processing" },
  ];

  for (const order of orders) {
    await prisma.order.create({
      data: order,
    });
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
