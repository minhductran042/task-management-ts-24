import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from 'body-parser';
import cors from "cors";

import { connectDatabase } from "./config/database";
import { routesApi } from "./routes/client/index.route";

connectDatabase();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(bodyParser.json());

//CORS
// Cach 1 : Tat ca cac ten mien deu duoc phep truy cap
app.use(cors()); 

//Cach 2 : Ap dung cho 1 ten mien cu the
// var corsOptions = {
//     origin: 'http://abc.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));



routesApi(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});