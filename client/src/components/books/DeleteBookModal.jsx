export default function DeleteBookModal({ book, onConfirm, loading, onClose }) {
  if (!book) return null;
  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,.45)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Delete Book</h5>
            <button className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            Delete <strong>{book.title}</strong>?
          </div>
          <div className="modal-footer">
            <button className="btn btn-light border" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-danger"
              disabled={loading}
              onClick={onConfirm}
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
