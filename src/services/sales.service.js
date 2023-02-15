const { saleModel } = require('../models');

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
}; 