import { categoryendpoint, productendpoint } from "../api";
import httpServices from "../httpServices";

export const getAllCategories = async (data) => {
  return await httpServices.get(
    `${categoryendpoint.getCategories}?company=${data}`
  );
};

export const getAllProducts = async (data) => {
  return await httpServices.get(
    `${productendpoint.getProduct}?company=${data}`
  );
};
