import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpensedetail,
  getExpenses,
  updateExpense,
} from "../controllers/expenses.controller";

const expenseRouter = Router();

expenseRouter.get("/", getExpenses);
expenseRouter.get("/:id", getExpensedetail);
expenseRouter.post("/", createExpense);
expenseRouter.put("/:id", updateExpense); // PUT route to update an expense
expenseRouter.delete("/:id", deleteExpense); // DELETE route to delete an expense

export { expenseRouter };
