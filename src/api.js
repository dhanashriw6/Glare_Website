const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:4000/api";

export const categoryendpoint = {
  getCategories: `${baseUrl}/categories`,
};

export const productendpoint = {
  getProduct: `${baseUrl}/products`,
};
