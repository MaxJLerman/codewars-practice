import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { digitalRoot, humanReadable, findEvenIndex } from "./katas";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (request: Request, response: Response) => {
  response.send("");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);

  console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
});
