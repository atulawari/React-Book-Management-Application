import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar bg-white border-bottom">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          BookManager
        </NavLink>
        <div className="navbar-nav ms-auto flex-row gap-2">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/books">
            Books
          </NavLink>
          <NavLink
            className="btn btn-primary btn-sm text-white px-3"
            to="/books/add"
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
