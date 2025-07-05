import React from "react";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Kitchen Knives",
    description:
      "Essential everyday knives for all your kitchen needs. High-quality stainless steel blades with comfortable handles.",
    bg: "bg-gradient-to-br from-green-400 to-green-600",
    image: images.glare1,
    route: "kitchenknives",
  },
  {
    title: "Prime Knives Series",
    description:
      "Premium collection featuring superior craftsmanship and durability. Perfect for professional chefs and cooking enthusiasts.",
    bg: "bg-gradient-to-br from-red-500 to-red-700",
    image: images.glare2,
      route: "primeknivesseries",
  },
]

const Glare = () => {
  const navigate = useNavigate();
   const handleButtonClick = (route) => {
    navigate(`/companies/glare/${route}`);
  };


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Banner Header */}
      <header
        className="relative h-[28rem] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${images.banner3})`,
          backgroundAttachment: "fixed",
          backgroundSize: "contain", // Shows whole image without stretching
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Enhanced overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

        {/* Additional overlay for even better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content with enhanced styling */}
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-2xl">
            Premium Kitchen
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-500 drop-shadow-none">
              Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
            Discover our comprehensive range of professional-grade kitchen tools
            and cutlery designed for culinary excellence
          </p>

          {/* Optional: Add a call-to-action button */}
          <div className="mt-8">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </header>
      {/* Categories Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Company Categories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated collection of kitchen essentials,
              designed to elevate your culinary experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transform hover:-translate-y-3 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div
                  className={`h-[50%] rounded-md mb-6 flex items-center justify-center text-6xl  group-hover:scale-105 transition-transform`}
                >
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  ) : (
                    <span className="text-white">{category.icon}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {category.description}
                </p>
                <button
                  onClick={() => handleButtonClick(category.route)}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-500 hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Explore Collection
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Glare;













 //   {
  //     title: "Grand Knives Series",
  //     description:
  //       "Luxury line of knives with exceptional design and performance. Crafted for those who demand the very best.",
  //     bg: "bg-gradient-to-br from-orange-400 to-orange-600",
  //     icon: "🗡️",
  //   },
  //   {
  //     title: "Premium Knives Series",
  //     description:
  //       "Top-tier collection with advanced materials and precision engineering. Built for professional kitchens and serious home cooks.",
  //     bg: "bg-gradient-to-br from-gray-700 to-gray-900",
  //     icon: "🥢",
  //   },
  //   {
  //     title: "Multi Packs & Knives Set",
  //     description:
  //       "Complete knife sets and multi-packs for comprehensive kitchen solutions. Perfect for new kitchens or as gifts.",
  //     bg: "bg-gradient-to-br from-purple-500 to-purple-700",
  //     icon: "📦",
  //   },
  //   {
  //     title: "Chopper & Cleaver",
  //     description:
  //       "Heavy-duty choppers and cleavers for robust cutting tasks. Built to handle tough ingredients with ease and precision.",
  //     bg: "bg-gradient-to-br from-teal-400 to-teal-600",
  //     icon: "🪓",
  //   },
  //   {
  //     title: "Kitchen Cutlery",
  //     description:
  //       "Specialized cutlery tools for various cooking needs. From peelers to carving forks, complete your kitchen arsenal.",
  //     bg: "bg-gradient-to-br from-blue-500 to-blue-700",
  //     icon: "🍴",
  //   },
  //   {
  //     title: "Kitchen Gadgets",
  //     description:
  //       "Innovative kitchen gadgets and tools to enhance your cooking experience. Smart solutions for modern kitchens.",
  //     bg: "bg-gradient-to-br from-yellow-500 to-yellow-700",
  //     icon: "⚙️",
  //   },
