import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import env from "./env";

const app: Express = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});

export default app;
