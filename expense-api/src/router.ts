import { Router } from "express";
import { expenseRouter } from "./routers/expense.router";
import { expenseRouterV2 } from "./routers/expenseV2.router";

const router = Router();

router.use("/expense", expenseRouter);
router.use("/v2/expense", expenseRouterV2);

export default router;
