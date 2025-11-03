


import React, { useState } from "react";

// Products data
const PRODUCTS = [
  {
    title: "Lunsumio(Mosunetuzumab-axgb)",
    information: "Injection: 1 mg/mL and 30 mg/30 mL",
    image: "src/assets/website.imge/Sephience8.webp ",
    link: "#"
  },
  {
    title: "Krazati (adagrasib)",
    information: "It is available as Tablets: 200 mg",
    image: "oncologyimage/Krazati-adagrasib-250-rc8hcaxqskkikzy0niv38t82mgzzhrm5znh0r2kz0k.webp",
    link: "#"
  },
  // Add more products
];

export default function OncologyProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fa] pb-16">
      <div className="max-w-4xl w-[96%] mx-auto bg-white rounded-2xl shadow-lg mt-20 px-6 py-8">
        <h1 className="text-center text-blue-900 text-4xl font-bold mb-6 tracking-wide">ONCOLOGY</h1>
        {/* Search Box */}
        <div className="flex justify-center mb-7 gap-0">
          <input
            type="text"
            className="px-4 py-3 w-52 sm:w-72 md:w-96 border rounded-l-lg border-gray-300 text-lg focus:outline-blue-300"
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-900 text-white px-5 rounded-r-lg text-lg transition hover:bg-blue-600"
            onClick={() => setQuery(query)}
          >
            Search
          </button>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-2 text-center text-lg text-gray-400 p-6">No products found.</div>
          ) : (
            filteredProducts.map(product => (
              <a
                key={product.title + product.image}
                href={product.link}
                className="block rounded-2xl bg-[#fafafa] border border-gray-200 shadow-md p-6 hover:shadow-2xl transition-all text-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg shadow-md w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-cover bg-gray-50 transition group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-xl"
                    style={{ background: "#f0f3f6" }}
                    onError={e => { e.target.src = "https://via.placeholder.com/180x180?text=No+Image"; }}
                  />
                </div>
                <div className="text-xl font-semibold group-hover:text-blue-600 mb-1">{product.title}</div>
                <div className="text-green-600 font-bold text-base mb-1">{product.information}</div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
