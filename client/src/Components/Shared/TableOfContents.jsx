// shared/TableOfContents.jsx
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export const TableOfContents = ({ items }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-gray-200 rounded-lg mb-10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-[#16244b]">Table of Contents</span>
        {open ? <ChevronUp className="text-[#16244b]" /> : <ChevronDown className="text-[#16244b]" />}
      </button>
      {open && (
        <ol className="px-6 pb-5 space-y-2 list-decimal list-inside text-gray-700">
          {items.map((t, i) => <li key={i}>{t}</li>)}
        </ol>
      )}
    </div>
  );
};