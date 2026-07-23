import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchBlogs } from "../../api/blogApi";

const BlogList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchBlogs(page, 9)
      .then((data) => {
        setItems(data.items);
        setPages(data.pages);
      })
      .catch(() => setError("Unable to load blog posts right now."))
      .finally(() => setLoading(false));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-[#16244B] py-20">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-light-blue">Blog</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Insights, guides, and updates on compliance, tax, and business
            operations across every market we serve.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6">
          {loading && (
            <p className="text-center text-gray-500 py-20">Loading blog posts...</p>
          )}

          {error && (
            <p className="text-center text-red-500 py-20">{error}</p>
          )}

          {!loading && !error && items.length === 0 && (
            <p className="text-center text-gray-500 py-20">
              No blog posts published yet — check back soon.
            </p>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-400 font-medium mb-2">
                      {blog.publishedDate
                        ? new Date(blog.publishedDate).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : ""}
                    </p>
                    <h3 className="text-lg font-bold text-[#16244b] leading-snug mb-3 group-hover:text-light-blue transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-6 line-clamp-3">
                      {blog.description}
                    </p>
                    <span className="inline-block mt-4 text-light-blue font-semibold text-sm">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && pages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40 hover:border-light-blue transition-colors"
              >
                Prev
              </button>
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                    page === i + 1
                      ? "bg-light-blue text-white"
                      : "border border-gray-200 text-gray-600 hover:border-light-blue"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={page === pages}
                className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40 hover:border-light-blue transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;