import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaSearch,
} from "react-icons/fa";
import { getAllProducts } from "../services/getCategoryandProduct";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Get category name and company from location state or use defaults
  const categoryName = location.state?.categoryName || "Products";
  const passedCompany = location.state?.company;
  
  // Determine company from URL path
  const getCompanyFromPath = () => {
    const pathname = location.pathname;
    if (pathname.includes('/companies/glare-solutions/')) {
      return 'glare_malamine';
    } else if (pathname.includes('/companies/krish/')) {
      return 'krish';
    } else if (pathname.includes('/companies/glare/')) {
      return 'glare';
    }
    return 'glare'; // default fallback
  };

  // Use company from state if available, otherwise determine from URL
  const currentCompany = passedCompany || getCompanyFromPath();

  // Fetch products based on company
  const handleGetProducts = async (company) => {
    try {
      setLoading(true);
      const res = await getAllProducts(company);
      const allProducts = res?.data?.data || [];
      
      // Filter products by categoryId
      const categoryProducts = allProducts.filter(
        product => product.categoryId === categoryId
      );
      
      setProducts(categoryProducts);
      console.log("category products", categoryProducts);
      console.log("company", company);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  window.scrollTo(0, 0); 
   handleGetProducts(currentCompany);
}, [categoryId, currentCompany]);

  useEffect(() => {
    handleGetProducts(currentCompany);
  }, [categoryId, currentCompany]);

  // Filter products based on search term
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.modelNo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  // Navigate back to the correct company page based on current path
                  const pathname = location.pathname;
                  if (pathname.includes('/companies/glare-solutions/')) {
                    navigate('/companies/glare-solutions');
                  } else if (pathname.includes('/companies/krish/')) {
                    navigate('/companies/krish');
                  } else {
                    navigate('/companies/glare');
                  }
                }}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back to Categories
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {categoryName}
                </h1>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} products available
                </p>
              </div>
            </div>
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden border"
                  >
                    <div className="relative aspect-square">
                      {product.images && product.images[0] ? (
                        <img
                          src={`http://localhost:4000/${product.images[0]}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-4xl">📦</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <div className="flex justify-between text-sm text-gray-600 mb-3">
                        <span>
                          Model No:{" "}
                          <span className="font-medium text-red-600">
                            {product.modelNo}
                          </span>
                        </span>
                        {product.size && (
                          <span>
                            Size:{" "}
                            <span className="font-medium text-red-600">
                              {product.size}
                            </span>
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      {product.features && product.features.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.features.slice(0, 2).map((feature, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all duration-300 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">📦</div>
                <p className="text-gray-500 text-lg mb-2">
                  No products found in this category
                </p>
                <p className="text-gray-400">
                  {searchTerm ? "Try adjusting your search terms" : "Products may be added soon"}
                </p>
              </div>
            )}

            {/* Product Detail Modal */}
            {selectedProduct && (
              <div
                className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50"
                onClick={() => setSelectedProduct(null)}
              >
                <div
                  className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative m-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
                    onClick={() => setSelectedProduct(null)}
                  >
                    &times;
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      {selectedProduct.images && selectedProduct.images[0] ? (
                        <img
                          src={`http://localhost:4000/${selectedProduct.images[0]}`}
                          alt={selectedProduct.name}
                          className="w-full object-cover rounded"
                          style={{ maxHeight: "400px" }}
                        />
                      ) : (
                        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-400 text-6xl">📦</span>
                        </div>
                      )}
                    </div>

                    <div className="md:w-1/2 flex flex-col">
                      <h2 className="text-2xl font-bold mb-2">
                        {selectedProduct.name}
                      </h2>
                      
                      <div className="flex gap-4 text-sm text-gray-600 mb-4">
                        <span>
                          Model: <strong>{selectedProduct.modelNo}</strong>
                        </span>
                        {selectedProduct.size && (
                          <span>
                            Size: <strong>{selectedProduct.size}</strong>
                          </span>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">
                        {selectedProduct.description}
                      </p>

                      {selectedProduct.features && selectedProduct.features.length > 0 && (
                        <>
                          <h3 className="font-semibold mb-2">Features:</h3>
                          <ul className="list-disc list-inside text-gray-700 mb-4">
                            {selectedProduct.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;