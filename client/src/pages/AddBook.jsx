import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BookForm from "../components/books/BookForm";
import { createBook } from "../services/bookService";
export default function AddBook() {
  const [loading, setLoading] = useState(false),
    nav = useNavigate();
  const submit = async (d) => {
    setLoading(true);
    try {
      await createBook(d);
      toast.success("Book added successfully");
      nav("/books");
    } catch {
      toast.error("Failed to add book");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Add Book</h1>
      <p className="text-muted">Create a new book record.</p>
      <div className="card">
        <div className="card-body p-4">
          <BookForm onSubmit={submit} loading={loading} />
        </div>
      </div>
    </>
  );
}
