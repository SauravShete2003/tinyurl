import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { postLink, getSlugredirect } from "./controllers/link.js";
import { postLogin, postSignup } from "./controllers/user.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log("MongoDB Connected✅");
  }
};

connectDB();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server running...",
  });
});

app.post("/Link", postLink);
app.get("/:slug", getSlugredirect);
app.post("/login", postLogin);
app.post("/signup", postSignup);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
