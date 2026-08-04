// shared/RecentBlogs.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import API from "../../api/axios";
import { stripHtml } from "../../utils/stripHtml";

export const RecentBlogs = ({ limit = 3 }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/blogs/recent?limit=${limit}`)
      .then(({ data }) => setBlogs(data || []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, [limit]);

  // Nothing to show and nothing loading — don't render an empty section.
  if (!loading && blogs.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-light-blue font-semibold uppercase tracking-wide text-sm">
            From the Blog
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#16244b] mt-3">
            Recent <span className="font-bold">Blogs</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: limit }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
                  <div className="h-64 bg-gray-100 animate-pulse" />
                  <div className="p-7 space-y-3">
                    <div className="h-5 bg-gray-100 rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-full" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3" />
                  </div>
                </div>
              ))
            : blogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog.slug}`}
                  className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {blog.publishedDate && (
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#16244b] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                        {new Date(blog.publishedDate).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#16244b] leading-snug mb-3 group-hover:text-light-blue transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-7 mb-6 line-clamp-3">
                      {blog.shortDescription || stripHtml(blog.description, 140)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-light-blue font-semibold group-hover:gap-4 transition-all duration-300">
                      Read More <FaArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};