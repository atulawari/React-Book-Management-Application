import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="display-5 fw-bold">Manage Your Books Easily</h1>
      <p className="lead text-muted">
        Modern full-stack CRUD application for your book collection.
      </p>
      <Link className="btn btn-primary me-2" to="/books">
        View Books
      </Link>
      <Link className="btn btn-outline-primary" to="/books/add">
        Add Book
      </Link>
    </div>
  );
}
