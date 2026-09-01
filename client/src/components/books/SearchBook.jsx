export default function SearchBook({ search, setSearch }) {
  return (
    <input
      className="form-control"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by title, author or category..."
    />
  );
}
