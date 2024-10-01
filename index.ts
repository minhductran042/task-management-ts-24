import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

import { connectDatabase } from "./config/database";
import { routeApi } from "./routes/client/index.route";
connectDatabase();


const app: Express = express();
const port: number | string = process.env.port || 3000;

routeApi(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});