import { useState } from "react";

const sideMenuData = [
  {
    title: "Category",
    submenu: ["All", "Shirts", "Jeans", "Shoes"],
  },
  {
    title: "Brand",
    submenu: ["Nike", "Adidas", "Puma", "Zara"],
  },
  {
    title: "Price",
    submenu: ["Under $50", "$50 - $100", "Over $100"],
  },
];

export default function FilterSidebar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <aside className="p-4 border-r h-full space-y-4 bg-white rounded-md shadow-sm">
      <h2 className="text-xl font-bold text-teal-950">Filters</h2>
      {sideMenuData.map((menu, index) => (
        <div key={menu.title}>
          <button
            onClick={() => toggleMenu(index)}
            className="w-full text-left font-medium p-2 rounded-md flex justify-between items-center text-emerald-800 hover:bg-slate-300 transition-all ease-in-out duration-200"
          >
            {menu.title}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <ul className="pl-4 space-y-1">
              {menu.submenu.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => toggleFilter(item)}
                    className={`block w-full text-left px-2 py-1 rounded text-emerald-600 ${
                      selectedFilters.includes(item)
                        ? "bg-emerald-700 text-white"
                        : "hover:bg-slate-200"
                    }
                     hover:bg-slate-300 transition-all ease-in-out duration-200
                    `}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
