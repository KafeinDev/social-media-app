type Token = {
  id: number;
  type: TokenType;
  value: string;
  valid: boolean;
  expiration: Date | null;
  userId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

enum TokenType {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
  VERIFY_EMAIL = "VERIFY_EMAIL",
  RESET_PASSWORD = "RESET_PASSWORD",
}

export default Token;
export { TokenType };
