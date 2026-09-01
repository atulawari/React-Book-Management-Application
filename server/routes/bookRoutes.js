import express from "express";
import * as c from "../controllers/bookController.js";
const r = express.Router();
r.route("/").get(c.getBooks).post(c.createBook);
r.route("/:id").get(c.getBookById).put(c.updateBook).delete(c.deleteBook);
export default r;
