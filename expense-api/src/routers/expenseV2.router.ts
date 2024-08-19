import { Router } from "express";
import { createExpensesV2, deleteExpensesV2, getExpensesIdV2, getExpensesV2, updateExpensesV2 } from "../controllers/expenseV2.controller";

const expenseRouterV2 = Router();

expenseRouterV2.get("/", getExpensesV2);
expenseRouterV2.get("/:id", getExpensesIdV2);
expenseRouterV2.post("/", createExpensesV2);
expenseRouterV2.put("/:id", updateExpensesV2);
expenseRouterV2.delete("/:id", deleteExpensesV2);



export { expenseRouterV2 };
