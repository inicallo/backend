import { Request, Response } from "express";
import db from "../config/db";
import { QueryError } from "mysql2";
import { IExpense } from "../type";

export const getExpensesV2 = (req: Request, res: Response) => {
  db.query("SELECT * FROM expense", (err: QueryError, result: IExpense[]) => {
    if (err) {
      return res.status(400).send({
        status: "error",
        msg: err,
      });
    }
    return res.status(200).send({
      status: "ok",
      expense: result,
    });
  });
};

export const getExpensesIdV2 = (req: Request, res: Response) => {
  db.query(
    `SELECT * FROM expense where id = ${req.params.id}`,
    (err: QueryError, result: IExpense[]) => {
      if (err) {
        return res.status(400).send({
          status: "error",
          msg: err,
        });
      }
      return res.status(200).send({
        status: "ok",
        expense: result,
      });
    }
  );
};

export const createExpensesV2 = (req: Request, res: Response) => {
  const { title, type, category, nominal, date } = req.body;
  db.query(
    `INSERT INTO expense(title, type, category, nominal, date)
    VALUES
    ('${title}', '${type}', '${category}', ${nominal}, '${date}')`,

    (err: QueryError, result: IExpense[]) => {
      if (err) {
        return res.status(400).send({
          status: "error",
          msg: err,
        });
      }
      return res.status(200).send({
        status: "ok",
        msg: "Expense Created!",
      });
    }
  );
};

export const updateExpensesV2 = (req: Request, res: Response) => {
  const query = [];
  for (let key in req.body) {
    query.push(`${key} = '${req.body[key]}'`);
  }

  console.log(query.join(", "));

  db.query(
    `
      UPDATE expense SET ${query.join(", ")} WHERE id = ${req.params.id}`,
    (err: QueryError) => {
      if (err) {
        return res.status(400).send({
          status: "error",
          msg: err,
        });
      }
    }
  );

  res.status(200).send({
    status: "ok",
    msg: "Expense Updated!",
  });
};

export const deleteExpensesV2 = (req: Request, res: Response) => {
  db.query(
    `DELETE FROM expense WHERE id = ${req.params.id}`,
    (err: QueryError) => {
      if (err) {
        return res.status(400).send({
          status: "error",
          msg: err.message,
        });
      }

      return res.status(200).send({
        status: "ok",
        msg: "Expense Deleted!",
      });
    }
  );
};
