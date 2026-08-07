// shared/RecentBlogs.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import API from "../../api/axios";
import { stripHtml } from "../../utils/stripHtml";

export const RecentBlogs = ({ limit = 4 }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/blogs/recent?limit=${limit}`)
      .then(({ data }) => setBlogs(data || []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, [limit]);
  console.log(blogs)

  // Nothing to show and nothing loading — don't render an empty section.
  if (!loading && blogs.length === 0) return null;

  return (
    <section className="py-24 bg-white">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT: Featured Blog (big card) */}
      <div className="h-[400px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#16244b] mb-8">
          Latest <span className="font-bold">Blog</span>
        </h2>

        {loading ? (
          <div className="h-full rounded-2xl bg-gray-100 animate-pulse" />
        ) : (
          blogs[0] && (
            <Link
              to={`/blogs/${blogs[0].slug}`}
              className="group relative block h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={blogs[0].coverImage}
                alt={blogs[0].title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* dark gradient for text readability, like the "Why Dubai?" card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1530] via-[#0b1530]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block border border-light-blue text-light-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                  Blog
                </span>
                <h3 className="text-white text-2xl font-bold leading-snug">
                  {blogs[0].title}
                </h3>
              </div>
            </Link>
          )
        )}
      </div>

      {/* RIGHT: Blog List (3 smaller horizontal cards) */}
      <div className="h-full">
        <h2 className="text-2xl  sm:text-3xl lg:text-4xl font-light text-[#16244b] mb-8">
          Our <span className="font-bold">Blogs</span>
        </h2>

        <div className="flex flex-col justify-between gap-5">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex gap-4 border ite border-gray-100 rounded-xl p-3 animate-pulse"
                >
                  <div className="w-28 h-24 bg-gray-100 rounded-lg shrink-0" />
                  <div className="flex-1 space-y-3 py-1">
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-full" />
                    <div className="h-3 bg-gray-100 rounded w-2/3" />
                  </div>
                </div>
              ))
            : blogs.slice(1, 4).map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog.slug}`}
                  className="group flex gap-4 bg-white border border-gray-200 rounded-xl p-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-28 h-24 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#16244b] leading-snug mb-1.5 line-clamp-2 group-hover:text-light-blue transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-6 line-clamp-2">
                      {blog.shortDescription || stripHtml(blog.description, 90)}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
};