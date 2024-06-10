import path from "path";

import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../.env") });

export default {
  port: parseInt(process.env.PORT || "8000", 10),
  jwtSecret: process.env.JWT_SECRET,
};
