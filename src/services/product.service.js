const { productModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const allProducts = async () => {
  const products = await productModel.allProducts();
  return { products };
}; 

const productById = async (id) => {
  const erro = schema.validateId(id);
  if (erro.type) return erro;
  const product = await productModel.productById(id);
  if (!product) return { type: 'INVALID_VALUE', message: 'Product not found' };
  return { product };
};

const createProduct = async (name) => {
  const newProductId = await productModel.createProduct({ name });
  const newProduct = await productModel.productById(newProductId);
  return { newProduct };
};

module.exports = {
  allProducts,
  productById,
  createProduct,
};