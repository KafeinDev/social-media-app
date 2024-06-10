import Password from "./password.model";
import Token from "./token.model";

type User = {
  id: string;
  username: string;
  displayname: string;
  email: string;
  password?: Password;
  tokens?: Token[];
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

export default User;
