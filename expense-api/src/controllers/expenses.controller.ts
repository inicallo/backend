import { Request, Response } from "express";
import fs from "fs";
import { IExpense } from "../type";


export const getExpenses = (req: Request, res: Response) => {
  try {
    const expense: IExpense[] = JSON.parse(
      fs.readFileSync("./src/data/expenses.json", "utf-8")
    );

    const { start, end } = req.query;

    // Filter data based on start and end date
    const data = expense.filter((item) => {
      let isValid = true;

      if (start && end) {
        isValid =
          isValid &&
          new Date(item.date) >= new Date(start as string) &&
          new Date(item.date) <= new Date(end as string); // corrected here
      }

      return isValid; // returning the boolean value
    });

    const totalExpense = data
      .filter((item) => item.type === "expense")
      .reduce((prev, curr) => prev + curr.nominal, 0);

    const totalIncome = data
      .filter((item) => item.type === "income")
      .reduce((prev, curr) => prev + curr.nominal, 0);

    res.status(200).send({
      status: "ok",
      expense: data, // changed to filtered data
      totalExpense,
      totalIncome,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      msg: "Failed to read expense data",
    });
  }
};

export const getExpenseDetail = (req: Request, res: Response) => {
  try {
    const expense: IExpense[] = JSON.parse(
      fs.readFileSync("./src/data/expenses.json", "utf-8")
    );
    const id = +req.params.id;
    const data = expense.find((item) => item.id === id);

    if (!data) {
      return res.status(404).send({
        status: "error",
        msg: "Data not found!",
      });
    }

    res.status(200).send({
      status: "ok",
      expense: data,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      msg: "Failed to read expense data",
    });
  }
};

export const createExpense = (req: Request, res: Response) => {
  try {
    const expense: IExpense[] = JSON.parse(
      fs.readFileSync("./src/data/expenses.json", "utf-8")
    );
    const id = Math.max(...expense.map((item) => item.id)) + 1;

    if (
      !req.body.title ||
      !req.body.nominal ||
      !req.body.type ||
      !req.body.category
    ) {
      return res.status(400).send({
        status: "error",
        msg: "Missing required fields",
      });
    }

    expense.push({
      id,
      title: req.body.title,
      nominal: req.body.nominal,
      type: req.body.type,
      category: req.body.category,
      date: req.body.date,
    });

    fs.writeFileSync(
      "./src/data/expenses.json",
      JSON.stringify(expense),
      "utf-8"
    );

    res.status(201).send({
      status: "ok",
      msg: "Expense created!",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      msg: "Failed to create expense",
    });
  }
};

export const updateExpense = (req: Request, res: Response) => {
  try {
    const expense: IExpense[] = JSON.parse(
      fs.readFileSync("./src/data/expenses.json", "utf-8")
    );
    const id = +req.params.id;
    const index = expense.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).send({
        status: "error",
        msg: "Data not found!",
      });
    }

    const updatedExpense = {
      ...expense[index],
      ...req.body,
      id,
    };

    expense[index] = updatedExpense;

    fs.writeFileSync(
      "./src/data/expenses.json",
      JSON.stringify(expense),
      "utf-8"
    );

    res.status(200).send({
      status: "ok",
      msg: "Expense updated!",
      expense: updatedExpense,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      msg: "Failed to update expense",
    });
  }
};

export const deleteExpense = (req: Request, res: Response) => {
  try {
    const expense: IExpense[] = JSON.parse(
      fs.readFileSync("./src/data/expenses.json", "utf-8")
    );
    const id = +req.params.id;
    const filteredExpenses = expense.filter((item) => item.id !== id);

    if (filteredExpenses.length === expense.length) {
      return res.status(404).send({
        status: "error",
        msg: "Data not found!",
      });
    }

    fs.writeFileSync(
      "./src/data/expenses.json",
      JSON.stringify(filteredExpenses),
      "utf-8"
    );

    res.status(200).send({
      status: "ok",
      msg: "Expense deleted!",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      msg: "Failed to delete expense",
    });
  }
};
