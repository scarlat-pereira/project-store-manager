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

const createProduct = async (name) => {
  // const error = schema.validateNewProduct(name);
  // if (error.type) return error;
  const newProductId = await productModel.createProduct({ name });
   const newProduct = await productModel.productById(newProductId);
  return { newProduct };
};

module.exports = {
  allProducts,
  productById,
  createProduct,
};