import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
