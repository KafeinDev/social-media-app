import express from "express";

import { authController } from "~/controllers";
import { validate } from "~/middlewares/validation";
import { authValidation } from "~/middlewares/validations";

const router = express.Router();
router.get("/me", authController.me);
router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);
router.post("/login", validate(authValidation.login), authController.login);

export default router;
