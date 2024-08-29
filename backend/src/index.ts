import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./auth";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.get("/orders", async (req: Request, res: Response) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
});

app.use("/auth", authRoutes);

app.listen(3001, () => {
  console.log("🚀 Server is running on http://localhost:3001");
});
