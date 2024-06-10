import bcrypt from "bcrypt";

const SALT_OR_ROUNDS = 10;

const hashPassword = async (
  password: string,
  saltOrRounds = SALT_OR_ROUNDS
) => {
  return bcrypt.hash(password, saltOrRounds);
};

const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export { hashPassword, comparePassword };
