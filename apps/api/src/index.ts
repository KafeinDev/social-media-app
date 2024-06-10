import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";

import env from "~/env";
import { errorHandler } from "~/middlewares/errors";
import routes from "~/routes/api/v1";

import jwtStrategy from "./config/passport";

const app: Express = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.use("/api/v1", routes);
app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});

export default app;
