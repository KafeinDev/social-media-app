import { Request, Response } from "express";

import asyncHandler from "~/middlewares/asyncHandler";
import { authService } from "~/services";

const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  const user = await authService.register(email, username, password);
  if (!user) {
    return;
  }

  const tokens = await authService.generateAuthTokens(user);
  res.status(201).send({ user, tokens });
});

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.login(email, password);
  const tokens = await authService.generateAuthTokens(user);
  res.send({ user, tokens });
});

export default { register, login };
