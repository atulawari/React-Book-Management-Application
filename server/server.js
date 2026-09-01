import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routes from "./routes/bookRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();
await connectDB();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/", (req, res) =>
  res.json({ message: "Book Management API Running" }),
);
app.use("/api/books", routes);
app.use(errorHandler);
app.listen(process.env.PORT || 5000, () => console.log("Server running"));
