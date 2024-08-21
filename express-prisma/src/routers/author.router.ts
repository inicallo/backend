import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";

export class AuthorRouter {
  private router: Router;
  private authorController: AuthorController;

  constructor() {
    this.router = Router();
    this.authorController = new AuthorController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/", this.authorController.getAuthor);
    this.router.get("/:id", this.authorController.getAuthorId); 
    this.router.post("/", this.authorController.createAuthor);
  }

  getRouter(): Router {
    return this.router;
  }
}
