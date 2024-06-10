import { NextFunction, Request, Response } from "express";

import AuthError from "~/errors/AuthError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AuthError) {
    return res
      .status(err.statusCode)
      .send({ message: err.message, code: err.statusCode });
  }

  return res.status(500).send({ message: "Internal server error" });
};
