const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const allProducts = async (_req, res) => {
  const { products } = await productService.allProducts();
  return res.status(200).json(products);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message, product } = await productService.productById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message, newProduct } = await productService.createProduct(name);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(201).json(newProduct);
};

const updateById = async (req, res) => { 
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productService.updateById(id, name);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const deleteById = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productService.deleteById(id);

  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(204).json(message);
};

module.exports = {
  allProducts,
  productById,
  createProduct,
  updateById,
  deleteById,
};