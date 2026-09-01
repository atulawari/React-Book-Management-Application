import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BookForm from "../components/books/BookForm";
import { getBookById, updateBook } from "../services/bookService";
export default function EditBook() {
  const { id } = useParams(),
    nav = useNavigate(),
    [book, setBook] = useState(null),
    [loading, setLoading] = useState(false);
  useEffect(() => {
    getBookById(id)
      .then((r) => setBook(r.data))
      .catch(() => toast.error("Book not found"));
  }, [id]);
  const submit = async (d) => {
    setLoading(true);
    try {
      await updateBook(id, d);
      toast.success("Book updated");
      nav("/books");
    } catch {
      toast.error("Failed to update");
    } finally {
      setLoading(false);
    }
  };
  if (!book)
    return (
      <div className="text-center py-5">
        <div className="spinner-border" />
      </div>
    );
  return (
    <>
      <h1>Edit Book</h1>
      <div className="card">
        <div className="card-body p-4">
          <BookForm defaultValues={book} onSubmit={submit} loading={loading} />
        </div>
      </div>
    </>
  );
}
