// shared/AccordionList.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const AccordionList = ({ items }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
          >
            <span className="font-semibold text-gray-900">{item.title}</span>
            <ChevronDown size={20} className={`text-gray-600 transition-transform ${expanded === idx ? "rotate-180" : ""}`} />
          </button>
          {expanded === idx && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600 text-sm">{item.desc || item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};