
import Product from "./product.model.js"

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const getProducts = async () => {
  return await Product.find().populate("category");
};  