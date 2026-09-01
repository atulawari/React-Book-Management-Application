export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="d-flex gap-2 justify-content-center mt-3">
      <button
        className="btn btn-sm btn-outline-secondary"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </button>
      <span className="align-self-center">
        Page {page} of {totalPages}
      </span>
      <button
        className="btn btn-sm btn-outline-secondary"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
