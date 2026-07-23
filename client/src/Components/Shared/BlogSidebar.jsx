// shared/BlogSidebar.jsx
import { FaArrowRight } from "react-icons/fa";

export const BlogSidebar = ({ posts, currentId }) => (
  <div className="space-y-6">
    {posts.filter((p) => p.id !== currentId).map((post) => (
      <div key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#16244b] leading-snug mb-3">{post.title}</h3>
          <p className="text-gray-500 text-sm leading-6 mb-4 line-clamp-3">{post.desc}</p>
          <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-light-blue text- font-semibold text-sm hover:gap-3 duration-300">
            Read More <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    ))}
  </div>
);