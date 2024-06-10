import jwt from "jsonwebtoken";

import { TokenType } from "@social-media-app/core/models/token.model";
import env from "~/env";

const generateJWT = async (
  id: string,
  type: TokenType,
  expires: number,
  secret = env.jwtSecret!
) => {
  const payload = {
    id: id,
    iat: Date.now(),
    exp: expires,
    type: type,
  };
  return jwt.sign(payload, secret);
};

const verifyJWT = async (token: string, secret = env.jwtSecret!) => {
  return jwt.verify(token, secret);
};

export { generateJWT, verifyJWT };
