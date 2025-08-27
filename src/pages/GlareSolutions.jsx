import React, { useEffect, useState } from "react";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../services/getCategoryandProduct";

const GlareSolutions = () => {
  const navigate = useNavigate();
  
  // Updated to navigate using GlareSolutions company route
  const handleButtonClick = (categoryId, categoryName) => {
    navigate(`/companies/glare-solutions/category/${categoryId}`, {
      state: { categoryName, company: "glare_malamine" } // Pass company info as state
    });
  };
  
  const [category, setCategories] = useState([]);

  const handleGetCategories = async (company = "glare_malamine") => {
    try {
      const res = await getAllCategories(company);
      setCategories(res?.data?.data || []);
      console.log("categories", res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  window.scrollTo(0, 0); // Scroll to top when component mounts
  handleGetCategories("glare_malamine");
}, []);

  useEffect(() => {
    handleGetCategories("glare_malamine");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Banner Header */}
      <header
        className="relative h-[28rem] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${images.banner3})`,
          backgroundAttachment: "fixed",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-black/20"></div>

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

          {/* <div className="mt-8">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>
          </div> */}
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
            {category.map((cat, index) => (
              <div
                key={cat._id}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl h-[400px] border border-gray-100 transform hover:-translate-y-3 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div
                  className={`h-[70%] rounded-md mb-3 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}
                >
                  {cat.images && cat.images[0] ? (
                    <img
                      src={`http://localhost:4000/${cat.images[0]}`}
                      alt={cat.name}
                      className="h-full w-full rounded-xl"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                      <span className="text-2xl">📦</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-600 mb-2 leading-relaxed text-sm">
                  {cat.description || "Explore our premium collection of kitchen essentials"}
                </p>
                <button
                  onClick={() => handleButtonClick(cat._id, cat.name)}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 mb-5 rounded-xl font-semibold hover:from-red-600 hover:to-red-500 hover:shadow-lg transform hover:scale-105 transition-all"
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

export default GlareSolutions;