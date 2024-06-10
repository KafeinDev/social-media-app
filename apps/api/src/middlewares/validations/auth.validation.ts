import { body } from "express-validator";

const register = [
  body("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is invalid"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 8, max: 32 })
    .withMessage("Password must be between 8 and 32 characters long"),
  body("username")
    .exists()
    .withMessage("Username is required")
    .isString()
    .withMessage("Username must be a string")
    .trim()
    .isLength({ min: 3, max: 16 })
    .withMessage("Username must be between 3 and 16 characters long")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      "Username can only contain alphanumeric characters and underscores"
    ),
];

const login = [
  body("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is invalid"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 8, max: 32 })
    .withMessage("Password must be between 8 and 32 characters long"),
];

export default { register, login };
