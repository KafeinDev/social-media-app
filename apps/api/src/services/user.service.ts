import { User } from "@social-media-app/core/models";
import { prisma } from "@social-media-app/prisma/index";
import AuthError from "~/errors/AuthError";

const createUser = async (email: string, username: string): Promise<User> => {
  if (await isEmailTaken(email)) {
    throw new AuthError("Email already taken", 400);
  }
  if (await isUsernameTaken(username)) {
    throw new AuthError("Username already taken", 400);
  }

  return await prisma.user.create({
    data: {
      email: email,
      username: username,
      displayname: username,
    },
  });
};

const updateUser = async (id: string, data: any): Promise<User | null> => {
  return await prisma.user.update({ where: { id }, data });
};

const findUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { id } });
};

const findUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};

const findUserByUsername = async (username: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { username } });
};

const isEmailTaken = async (email: string): Promise<boolean> => {
  const user = await findUserByEmail(email);
  return !!user;
};

const isUsernameTaken = async (username: string): Promise<boolean> => {
  const user = await findUserByUsername(username);
  return !!user;
};

export default {
  createUser,
  updateUser,
  findUserById,
  findUserByEmail,
  findUserByUsername,
  isEmailTaken,
  isUsernameTaken,
};
