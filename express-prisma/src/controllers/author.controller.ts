import { Request, Response } from "express";
import prisma from "../prisma";

export class AuthorController {
  async createAuthor(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const author = await prisma.author.create({
        data: { name, email, password },
      });
      res.status(200).send({
        status: "success",
        msg: "author created!",
        author,
      });
    } catch (err) {
      res.status(400).send({
        status: "error",
        msg: err,
      });
    }
  }

  async getAuthor(req: Request, res: Response) {
    try {
      const authors = await prisma.author.findMany();
      res.status(200).send({
        status: "Ok",
        authors,
      });
    } catch (err) {
      res.status(400).send({
        status: "error",
        msg: err,
      });
    }
  }

  async getAuthorId(req: Request, res: Response) {
    try {
      const author = await prisma.author.findUnique({
        where: { id: +req.params.id },
      });
      if (!author) throw "author not found!";
      res.status(200).send({
        status: "Ok",
        author,
      });
    } catch (err) {
      res.status(400).send({
        status: "error",
        msg: err,
      });
    }
  }
}
