import { Express } from "express";
import { taskRoute } from "./task.route";

export const routeApi = (app: Express) => {
   app.use("/tasks", taskRoute);
}
