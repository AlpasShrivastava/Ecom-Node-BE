import * as productService from "./product.service.js";

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const result = await productService.getProducts(req.query);

    res.status(200).json({
      success: true,
      ...result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};