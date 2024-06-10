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
  ACCESS = "access",
  REFRESH = "refresh",
  VERIFY_EMAIL = "verify-email",
  RESET_PASSWORD = "reset-password",
}

export default Token;
export { TokenType };
