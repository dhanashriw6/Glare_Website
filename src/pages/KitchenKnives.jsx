import React, { useState } from "react";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaEye,
  FaHeart,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import images from "../assets/images";

const KitchenKnives = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedKnife, setSelectedKnife] = useState(null);

  const knivesData = [
    {
      id: 1,
      name: "FRUIT KNIFE",
      modelNo: "GA-101",
      size: "180 MM",

      image: images.k1,

      description:
        "Perfect for peeling and cutting small fruits. Sharp, precise blade with ergonomic handle.",
      features: [
        "Stainless Steel",
        "Ergonomic Handle",
        "Sharp Edge",
        "Easy Grip",
      ],
      category: "utility",
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: "PARING KNIFE",
      modelNo: "GA-102",

      originalPrice: "$34.99",
      image: images.k2,

      description:
        "Versatile small knife for detailed work, peeling, and trimming vegetables.",
      features: [
        "High Carbon Steel",
        "Balanced Weight",
        "Precision Tip",
        "Comfortable Grip",
      ],
      category: "utility",
      inStock: true,
      isNew: false,
    },
    {
      id: 3,
      name: "STEAK KNIFE",
      modelNo: "GA-103",
      size: "210 MM",

      image: images.k3,

      description:
        "Premium steak knife with serrated edge for effortless cutting through meat.",
      features: [
        "Serrated Edge",
        "Premium Steel",
        "Elegant Design",
        "Dishwasher Safe",
      ],
      category: "dining",
      inStock: true,
      isNew: true,
    },
    {
      id: 4,
      name: "TOMATO KNIFE",
      modelNo: "GA-104",
      size: "210 MM",

      image: images.k4,

      description:
        "Specialized serrated knife designed specifically for slicing tomatoes and soft fruits.",
      features: [
        "Fine Serrated Edge",
        "Non-Slip Handle",
        "Rust Resistant",
        "Lightweight",
      ],
      category: "utility",
      inStock: true,
      isNew: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Knives", count: knivesData.length },
    {
      id: "utility",
      name: "Utility",
      count: knivesData.filter((k) => k.category === "utility").length,
    },
    {
      id: "dining",
      name: "Dining",
      count: knivesData.filter((k) => k.category === "dining").length,
    },
    {
      id: "professional",
      name: "Professional",
      count: knivesData.filter((k) => k.category === "professional").length,
    },
  ];

  const filteredKnives = knivesData.filter((knife) => {
    const matchesCategory =
      selectedFilter === "all" || knife.category === selectedFilter;
    const matchesSearch =
      knife.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      knife.modelNo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-red-500"
              >
                <FaArrowLeft className="mr-2" /> Back to Categories
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Kitchen Knives
                </h1>
                <p className="text-sm text-gray-600">
                  {filteredKnives.length} products available
                </p>
              </div>
            </div>
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search knives..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <FaFilter className="mr-2" /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedFilter(c.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedFilter === c.id
                        ? "bg-red-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{c.name}</span>
                      <span className="text-sm opacity-75">({c.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKnives.map((knife) => (
                <div
                  key={knife.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden border"
                >
                  <div className="relative aspect-square">
                    <img
                      src={knife.image}
                      alt={knife.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4 space-y-2">
                      {knife.isNew && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          NEW
                        </span>
                      )}
                      {!knife.inStock && (
                        <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          OUT OF STOCK
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 space-y-2">
                      <button
                        onClick={() => toggleFavorite(knife.id)}
                        className="p-2 bg-white rounded-full shadow"
                      >
                        <FaHeart
                          className={
                            favorites.includes(knife.id)
                              ? "text-red-500"
                              : "text-gray-400"
                          }
                        />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {knife.name}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span>
                        Model:{" "}
                        <span className="font-medium text-red-600">
                          {knife.modelNo}
                        </span>
                      </span>
                      <span>{knife.size}</span>
                    </div>

                    {/* <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {knife.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {knife.features.slice(0, 2).map((f, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {f}
                        </span>
                      ))}
                    </div> */}

                    <button
                      onClick={() => setSelectedKnife(knife)}
                      disabled={!knife.inStock}
                      className={`w-full py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all duration-300 ${
                        knife.inStock
                          ? "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {selectedKnife && (
              <div
                className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50"
                onClick={() => setSelectedKnife(null)}
              >
                <div
                  className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
                    onClick={() => setSelectedKnife(null)}
                  >
                    &times;
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={selectedKnife.image}
                      alt={selectedKnife.name}
                      className="w-full md:w-1/2 object-cover rounded"
                      style={{ maxHeight: "400px" }}
                    />

                    <div className="md:w-1/2 flex flex-col">
                      <h2 className="text-2xl font-bold mb-2">
                        {selectedKnife.name}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {selectedKnife.description}
                      </p>

                      <h3 className="font-semibold mb-2">Features:</h3>
                      <ul className="list-disc list-inside text-gray-700 mb-4">
                        {selectedKnife.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {filteredKnives.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenKnives;
