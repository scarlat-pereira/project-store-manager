// const { insertSale } = require('../models/sales.model');
const { saleService } = require('../services');

// const createController = async (req, res) => {
//   const products = req.body;
//   const response = await insertSale(products);
//   if (response.type) {
//     return res.status(response.type).json({ message: response.message });
//   }
//   return res.status(201).json(response.message);
// };

const allSales = async (_req, res) => {
  const { result } = await saleService.allSales();
  return res.status(200).json(result);
};

const salesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.salesById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
};

module.exports = {
  // createController,
  allSales,
  salesById,
};