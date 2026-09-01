import Book from "../models/Book.js";
export const getBooks = async (req, res, next) => {
  try {
    const page = Math.max(+req.query.page || 1, 1),
      limit = Math.min(+req.query.limit || 8, 50),
      s = (req.query.search || "").trim(),
      filter = s
        ? {
            $or: ["title", "author", "category"].map((k) => ({
              [k]: { $regex: s, $options: "i" },
            })),
          }
        : {};
    const total = await Book.countDocuments(filter),
      books = await Book.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
    res.json({
      books,
      page,
      pages: Math.max(Math.ceil(total / limit), 1),
      total,
    });
  } catch (e) {
    next(e);
  }
};
export const getBookById = async (req, res, next) => {
  try {
    const b = await Book.findById(req.params.id);
    if (!b) return res.status(404).json({ message: "Book not found" });
    res.json(b);
  } catch (e) {
    next(e);
  }
};
export const createBook = async (req, res, next) => {
  try {
    res.status(201).json(await Book.create(req.body));
  } catch (e) {
    next(e);
  }
};
export const updateBook = async (req, res, next) => {
  try {
    const b = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!b) return res.status(404).json({ message: "Book not found" });
    res.json(b);
  } catch (e) {
    next(e);
  }
};
export const deleteBook = async (req, res, next) => {
  try {
    const b = await Book.findByIdAndDelete(req.params.id);
    if (!b) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (e) {
    next(e);
  }
};
