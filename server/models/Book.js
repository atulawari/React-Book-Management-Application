import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    publishedYear: { type: Number, required: true, min: 1000 },
  },
  { timestamps: true },
);
export default mongoose.model("Book", schema);
