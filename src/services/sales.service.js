const { saleModel } = require('../models');
// const { validateSale } = require('./validations/validationsInputValues');

// const insertSale = async (products) => {
//   const errors = products.map((sale) => validateSale(sale));
//   const Error = errors.find((error) => error.type);
//   if (Error) {
//     return Error;
//   }
//   const mapear = products.map((product) => saleModel.findProductId(product.productId));
//   const productIdData = await Promise.all(mapear);
//   const checkProductId = productIdData.some(
//     (value) => typeof value === 'object',
//   );

//   if (checkProductId === false) return 'Product not found';
//   // banco de dados product_id tem q ser aqui
//   const [insertId] = await saleModel.insertSale;

//   const promiseInsert = products.map((e) => saleModel
//     .insertSaleProduct(insertId, e.productId, e.quantity));
//   const result = await Promise.all(promiseInsert);
//   return result;
// };

const allSales = async () => {
  const result = await saleModel.allSales();
  return { result };
};

const salesById = async (id) => {
  const result = await saleModel.salesById(id);
  if (!result.length) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: result };
};

module.exports = {
  allSales,
  salesById,
  // insertSale,
};