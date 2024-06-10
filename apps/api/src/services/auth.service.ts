import { User } from "@social-media-app/core/models";
import { TokenType } from "@social-media-app/core/models/token.model";
import { prisma } from "@social-media-app/prisma";
import AuthError from "~/errors/AuthError";
import { userService } from "~/services";
import { comparePassword, hashPassword } from "~/utils/passwordUtils";
import { generateJWT, verifyJWT } from "~/utils/tokenUtils";

const register = async (
  email: string,
  username: string,
  password: string
): Promise<User | undefined> => {
  const user = await userService.createUser(email, username);
  if (!user) {
    throw new AuthError("Invalid credentials", 401);
  }

  const passwordHash = await hashPassword(password);
  await prisma.password.create({
    data: { hash: passwordHash, userId: user.id },
  });

  return user;
};

const login = async (email: string, password: string): Promise<User> => {
  const user = await userService.findUserByEmail(email);
  if (!user) {
    throw new AuthError("Invalid credentials", 401);
  }

  const userPassword = await prisma.password.findUnique({
    where: { userId: user.id },
  });
  if (!userPassword) {
    throw new AuthError("Invalid credentials", 401);
  }

  const isPasswordValid = await comparePassword(password, userPassword.hash);
  if (!isPasswordValid) {
    throw new AuthError("Invalid credentials", 401);
  }

  return user;
};

const generateAuthTokens = async (user: User) => {
  const accessTokenExpires = Date.now() + 30 * 60 * 1000;
  const accessToken = await generateJWT(
    user.id,
    TokenType.ACCESS,
    accessTokenExpires
  );

  const refreshTokenExpires = Date.now() + 30 * 24 * 60 * 60 * 1000;
  const refreshToken = await generateJWT(
    user.id,
    TokenType.REFRESH,
    refreshTokenExpires
  );

  return {
    access: {
      token: accessToken,
      expires: new Date(accessTokenExpires),
    },
    refresh: {
      token: refreshToken,
      expires: new Date(refreshTokenExpires),
    },
  };
};

export default { register, login, generateAuthTokens };
