const { saleService } = require('../services');

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
  allSales,
  salesById,
};