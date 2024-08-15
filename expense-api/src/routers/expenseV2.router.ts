import { Router } from "express";
import { getExpensesIdV2, getExpensesV2 } from "../controllers/expenseV2.controller";

const expenseRouterV2 = Router();

expenseRouterV2.get("/", getExpensesV2);
expenseRouterV2.get("/:id", getExpensesIdV2);


export { expenseRouterV2 };
