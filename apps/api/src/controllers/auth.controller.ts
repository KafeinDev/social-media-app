import { Request, Response } from "express";

import { TokenType } from "@social-media-app/core/models/token.model";
import asyncHandler from "~/middlewares/asyncHandler";
import { authService, userService } from "~/services";

const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  const user = await authService.register(email, username, password);
  if (!user) {
    return;
  }

  const tokens = await authService.generateAuthTokens(user);
  res
    .status(201)
    .cookie("accessToken", tokens.access.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: tokens.access.expires.getTime() / 1000,
    })
    .cookie("refreshToken", tokens.refresh.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: tokens.refresh.expires.getTime() / 1000,
    })
    .send(user);
});

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.login(email, password);
  const tokens = await authService.generateAuthTokens(user);
  res
    .status(201)
    .cookie("accessToken", tokens.access.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: tokens.access.expires.getTime() / 1000,
    })
    .cookie("refreshToken", tokens.refresh.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: tokens.refresh.expires.getTime() / 1000,
    })
    .send(user);
});

const me = asyncHandler(async (req: Request, res: Response) => {
  const accessToken = req.cookies["accessToken"];
  const refreshToken = req.cookies["refreshToken"];
  if (!accessToken || !refreshToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const payload = await authService.verifyToken(
      accessToken,
      TokenType.ACCESS
    );

    const user = await userService.findUserById(payload.id);
    if (!user) {
      throw new Error("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
});

export default { register, login, me };
