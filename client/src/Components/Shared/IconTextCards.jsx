// shared/IconTextCards.jsx
export const IconTextCards = ({ items, columns = "lg:grid-cols-3", Icon }) => (
  <div className={`grid ${columns} gap-6`}>
    {items.map((item, i) => {
      const ItemIcon = item.icon || Icon;
      return (
        <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {ItemIcon && <ItemIcon className="text-cyan-400 text-2xl mb-3" />}
          <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
          {item.desc && <p className="text-gray-500 text-sm leading-6">{item.desc}</p>}
        </div>
      );
    })}
  </div>
);