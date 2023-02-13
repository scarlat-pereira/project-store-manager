const { productModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const allProducts = async () => {
  const products = await productModel.allProducts();
  return { products };
};

const productById = async (id) => {
  const error = schema.validateId(id);
  if (error.type) return error;
  const product = await productModel.productById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { product };
};

module.exports = {
  allProducts,
  productById,
};