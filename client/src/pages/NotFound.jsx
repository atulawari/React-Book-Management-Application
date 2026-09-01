import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-1">404</h1>
      <p>Page not found.</p>
      <Link className="btn btn-primary" to="/">
        Go Home
      </Link>
    </div>
  );
}
