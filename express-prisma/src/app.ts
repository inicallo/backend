import express, { Express, Response, Request } from "express";
import { AuthorRouter } from "./routers/author.router";

const PORT: number = 8000;

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
  }

  private configure(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    const authorRouter = new AuthorRouter()

    this.app.get("/api", (req: Request, res: Response) => {
      res.send(`Hello this is my API`);
    });

    this.app.use('/api/authors', authorRouter.getRouter())
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`[API] local: http://localhost:${PORT}/api`);
    });
  }
}
