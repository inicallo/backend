import { Router } from "express";
import { expenseRouter } from "./routers/expense.router";

const router = Router();

router.use("/expense", expenseRouter);

export default router;
