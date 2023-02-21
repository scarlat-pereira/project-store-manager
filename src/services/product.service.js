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

const updateById = async (id, name) => { 
  const product = await productModel.productById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  
  const result = await productModel.updateById(id, name);
  return { type: null, message: result };
};

const deleteById = async (id) => { 
  const product = await productModel.productById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  await productModel.deleteById(id);
  return { type: null, message: '' };
};

const selectByName = async (q) => {
  if (!q) {
    const productsSearch = await productModel.allProducts();
    return { type: null, message: productsSearch };
  }
  const product = await productModel.selectByName(q);
  return { type: null, message: product };
};

module.exports = {
  allProducts,
  productById,
  createProduct,
  updateById,
  deleteById,
  selectByName,
};