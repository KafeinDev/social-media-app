import express from "express";

import authRoutes from "./auth.routes";

const router = express.Router();
router.use("/auth", authRoutes);

router.use((req, res) => {
  res.status(404).send({ message: "Route not found" });
});

export default router;
