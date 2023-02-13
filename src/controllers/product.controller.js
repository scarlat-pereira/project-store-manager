const { productService } = require('../services');

const allProducts = async (_req, res) => {
  const { products } = await productService.allProducts();
  return res.status(200).json(products);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message, product } = await productService.productById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(product);
};

module.exports = {
  allProducts,
  productById,
};