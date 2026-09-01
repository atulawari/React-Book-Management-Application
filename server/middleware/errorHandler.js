export default function errorHandler(err, req, res, next) {
  console.error(err);
  if (err.name === "CastError")
    return res.status(400).json({ message: "Invalid book ID" });
  if (err.name === "ValidationError")
    return res.status(400).json({
      message: Object.values(err.errors)
        .map((x) => x.message)
        .join(", "),
    });
  res.status(500).json({ message: "Something went wrong" });
}
