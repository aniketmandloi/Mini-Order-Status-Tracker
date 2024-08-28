import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.get("/orders", async (req: Request, res: Response) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
});

app.listen(3001, () => {
  console.log("🚀 Server is running on http://localhost:3001");
});
