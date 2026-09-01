import { useForm } from "react-hook-form";
import { useEffect } from "react";
export default function BookForm({ defaultValues, onSubmit, loading = false }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", author: "", category: "", publishedYear: "" },
  });
  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);
  return (
    <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
      {[
        ["title", "Title"],
        ["author", "Author"],
        ["category", "Category"],
      ].map(([n, l]) => (
        <div className="mb-3" key={n}>
          <label className="form-label fw-semibold">{l} *</label>
          <input
            className={`form-control ${errors[n] ? "is-invalid" : ""}`}
            {...register(n, { required: `${l} is required` })}
          />
          <div className="invalid-feedback">{errors[n]?.message}</div>
        </div>
      ))}
      <div className="mb-4">
        <label className="form-label fw-semibold">Published Year *</label>
        <input
          type="number"
          className={`form-control ${errors.publishedYear ? "is-invalid" : ""}`}
          {...register("publishedYear", {
            required: "Published year is required",
            valueAsNumber: true,
          })}
        />
        <div className="invalid-feedback">{errors.publishedYear?.message}</div>
      </div>
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save Book"}
      </button>
    </form>
  );
}
