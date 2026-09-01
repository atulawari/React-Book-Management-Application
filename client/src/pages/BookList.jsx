import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBooks, deleteBook } from "../services/bookService";
import SearchBook from "../components/books/SearchBook";
import BookTable from "../components/books/BookTable";
import Pagination from "../components/books/Pagination";
import DeleteBookModal from "../components/books/DeleteBookModal";
export default function BookList() {
  const [books, setBooks] = useState([]),
    [search, setSearch] = useState(""),
    [page, setPage] = useState(1),
    [pages, setPages] = useState(1),
    [loading, setLoading] = useState(true),
    [selected, setSelected] = useState(null),
    [deleting, setDeleting] = useState(false);
  const load = async () => {
    setLoading(true);
    try {
      const r = await getBooks({ search, page, limit: 8 });
      setBooks(r.data.books);
      setPages(r.data.pages);
    } catch {
      toast.error("Failed to load books");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, [search, page]);
  const confirmDelete = async () => {
    setDeleting(true);
    try {
      await deleteBook(selected._id);
      toast.success("Book deleted successfully");
      setSelected(null);
      load();
    } catch {
      toast.error("Failed to delete book");
    } finally {
      setDeleting(false);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <h1>Books</h1>
          <p className="text-muted">Manage your collection.</p>
        </div>
        <Link className="btn btn-primary" to="/books/add">
          + Add Book
        </Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <SearchBook
              search={search}
              setSearch={(v) => {
                setSearch(v);
                setPage(1);
              }}
            />
          </div>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" />
            </div>
          ) : (
            <BookTable books={books} onDelete={setSelected} />
          )}
          <Pagination page={page} totalPages={pages} onChange={setPage} />
        </div>
      </div>
      <DeleteBookModal
        book={selected}
        loading={deleting}
        onClose={() => setSelected(null)}
        onConfirm={confirmDelete}
      />
    </>
  );
}
