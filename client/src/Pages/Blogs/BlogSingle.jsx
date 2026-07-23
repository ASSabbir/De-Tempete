import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { fetchBlogBySlug, fetchRecentBlogs } from "../../api/blogApi";

// Turns your "blank line = new paragraph, '- ' = bullet" convention
// into rendered JSX blocks.
const renderRichText = (text) => {
  if (!text) return null;
  const blocks = text.split(/\n\s*\n/);

  return blocks.map((block, i) => {
    const lines = block.split("\n").filter(Boolean);
    const isBulletBlock = lines.every((l) => l.trim().startsWith("- "));

    if (isBulletBlock) {
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-6">
          {lines.map((l, j) => (
            <li key={j} className="text-gray-600 leading-7">
              {l.trim().replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="text-gray-600 leading-8 mb-6">
        {block.trim()}
      </p>
    );
  });
};

const BlogSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setBlog(null);

    fetchBlogBySlug(slug)
      .then((data) => setBlog(data))
      .catch(() => setError("This blog post couldn't be found."))
      .finally(() => setLoading(false));

    fetchRecentBlogs(slug)
      .then((data) => setRecent(data))
      .catch(() => setRecent([]));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (loading) {
    return <p className="text-center text-gray-500 py-32">Loading article...</p>;
  }

  if (error || !blog) {
    return (
      <div className="text-center py-32">
        <p className="text-gray-500 mb-6">{error || "Blog post not found."}</p>
        <Link to="/blogs" className="text-light-blue font-semibold">
          ← Back to all blogs
        </Link>
      </div>
    );
  }

  const tocItems = [
    { id: "section-main", label: blog.title },
    ...(blog.title2 ? [{ id: "section-second", label: blog.title2 }] : []),
    { id: "leave-a-reply", label: "Leave a Reply" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22,36,75,0.85), rgba(22,36,75,0.85)), url(${blog.coverImage})`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-light-blue text-sm font-medium mb-3">
            {blog.publishedDate
              ? new Date(blog.publishedDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Table of Contents */}
          <div className="border border-gray-200 rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-[#16244b] mb-4">Table of Contents</h3>
            <ol className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-500 hover:text-light-blue transition-colors text-sm"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-2xl mb-10 shadow-lg"
          />

          <section id="section-main" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              {blog.title}
            </h2>
            {renderRichText(blog.description)}
          </section>

          {blog.title2 && (
            <section id="section-second" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
                {blog.title2}
              </h2>
              {renderRichText(blog.description2)}
            </section>
          )}

          {/* Leave a Reply */}
          <section id="leave-a-reply" className="scroll-mt-24 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold text-[#16244b] mb-2">Leave a Reply</h2>
            <p className="text-sm text-gray-400 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Comment *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-light-blue focus:outline-none"
                />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  placeholder="Name"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:border-light-blue focus:outline-none"
                />
                <input
                  placeholder="Email"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:border-light-blue focus:outline-none"
                />
                <input
                  placeholder="Website"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:border-light-blue focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="bg-[#16244B] hover:bg-[#1d2e5c] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Post Comment
              </button>
            </form>
          </section>
        </div>

        {/* Sidebar — recent blogs */}
        <aside>
          <h3 className="font-bold text-[#16244b] mb-6">Recent Posts</h3>
          <div className="space-y-5">
            {recent.map((item) => (
              <Link
                key={item._id}
                to={`/blogs/${item.slug}`}
                className="flex gap-4 group"
              >
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg shrink-0"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#16244b] leading-snug group-hover:text-light-blue transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-xs text-light-blue font-medium">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogSingle;