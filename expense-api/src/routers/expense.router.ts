import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpenseDetail,
  getExpenses,
  updateExpense,
} from "../controllers/expenses.controller";

const expenseRouter = Router();

expenseRouter.get("/", getExpenses);
expenseRouter.get("/:id", getExpenseDetail);
expenseRouter.post("/", createExpense);
expenseRouter.put("/:id", updateExpense); // PUT route to update an expense
expenseRouter.delete("/:id", deleteExpense); // DELETE route to delete an expense

export { expenseRouter };
