import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/orders", async (req: Request, res: Response) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
