// shared/LeaveAReply.jsx
export const LeaveAReply = () => (
  <div className="mt-16">
    <h2 className="text-4xl font-bold text-[#16244b] mb-4">Leave a Reply</h2>
    <p className="text-gray-500 text-sm mb-6">Your email address will not be published. Required fields are marked *</p>
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Comment *</label>
        <textarea rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
        <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Website</label>
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
      </div>
      <button type="submit" className="bg-[#16244b] hover:bg-[#0d1a38] text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
        Post Comment
      </button>
    </form>
  </div>
);