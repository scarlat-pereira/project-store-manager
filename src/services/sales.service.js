const { saleModel } = require('../models');
const { validateSale } = require('./validations/validationsInputValues');

const allSales = async () => {
  const result = await saleModel.allSales();
  return { result };
};

const salesById = async (id) => {
  const result = await saleModel.salesById(id);
  if (!result.length) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: result };
};

const haveProductId = async (sales) => {
  // verifica se existe no banco de dados
  const mapear = sales.map((product) =>
    saleModel.findProductId(product.productId));
  
  const productIdData = await Promise.all(mapear);

  return productIdData.some((e) => !e.length);
};

const insertSale = async (sales) => {
  const errors = sales.map((product) => validateSale(product));
  const Error = errors.find((error) => error.type);
  if (Error) {
    if (Error.message.includes('than')) {
      return { type: 422, message: Error.message };
    }
    return { type: 400, message: Error.message };
  }
  if (await haveProductId(sales)) return { type: 404, message: 'Product not found' };
  const insertId = await saleModel.insertSale();

  const result = sales.map((e) => saleModel.insertSaleProduct(insertId, e));

  const promiseInsert = await Promise.all(result);

  const response = {
    id: insertId,
    itemsSold: promiseInsert,
  };

  return { type: null, message: response };
};

const hasSale = async (id) => {
  const result = await saleModel.salesById(id);
  return result.length;
};

const updateById = async (id, sales) => { 
  if (!(await hasSale(id))) {
    return { type: 404, message: 'Sale not found' };
  }
  const errors = sales.map((product) => validateSale(product));
  const Error = errors.find((error) => error.type);
  if (Error) {
    if (Error.message.includes('than')) return { type: 422, message: Error.message };
    return { type: 400, message: Error.message };
  }
  if (await haveProductId(sales)) return { type: 404, message: 'Product not found' };
  await saleModel.deleteById(id);
  const result = sales.map((e) => saleModel.insertSaleProduct(id, e));
  const promiseInsert = await Promise.all(result);
  // console.log(promiseInsert);
  const response = {
    saleId: id,
    itemsUpdated: promiseInsert,
  };
  return { type: null, message: response };
};

const deleteById = async (id) => {
  const sale = await saleModel.salesById(id);
  if (!sale.length) return { type: 404, message: 'Sale not found' };
  await saleModel.deleteById(id);
  return { type: null, message: '' };
}; 

module.exports = {
  allSales,
  salesById,
  insertSale,
  updateById,
  deleteById,
};