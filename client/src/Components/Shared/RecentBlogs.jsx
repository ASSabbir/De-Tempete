// shared/RecentBlogs.jsx
import { FaArrowRight } from "react-icons/fa";

export const RecentBlogs = ({ blogs }) => (
  <section className="py-24 bg-white">
    <div className="max-w-[1600px] mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-light text-[#16244b]">
          Recent <span className="font-bold">Blogs</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-105 duration-500" />
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-bold text-[#16244b] leading-snug mb-4 group-hover:text-light-blue transition">{blog.title}</h3>
              <p className="text-gray-500 text-lg leading-8 mb-8">{blog.desc}</p>
               <a href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-light-blue font-semibold hover:gap-4 duration-300">
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);