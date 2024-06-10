type Password = {
  hash: string;
  userId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

export default Password;
