import { Link } from "react-router-dom";
export default function BookTable({ books, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Category</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-5">
                No books found.
              </td>
            </tr>
          ) : (
            books.map((b) => (
              <tr key={b._id}>
                <td>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="book-cover">{b.title?.[0]}</div>
                    <strong>{b.title}</strong>
                  </div>
                </td>
                <td>{b.author}</td>
                <td>{b.category}</td>
                <td>{b.publishedYear}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-outline-primary me-2"
                    to={`/books/${b._id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(b)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
