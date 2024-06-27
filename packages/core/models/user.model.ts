import Like from "./like.model";
import Password from "./password.model";
import Post from "./post.model";
import Token from "./token.model";

type User = {
  id: string;
  username: string;
  displayname: string;
  email: string;
  password?: Password;
  tokens?: Token[];
  posts?: Post[];
  likes?: Like[];
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

export default User;
