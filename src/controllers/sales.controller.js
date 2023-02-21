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

const insertSale = async (req, res) => {
  const sale = req.body;
  const response = await saleService.insertSale(sale);
  if (response.type) {
    return res.status(response.type).json({ message: response.message });
  }
  return res.status(201).json(response.message);
};

const updateById = async (req, res) => { 
  const sales = req.body;
  const { id } = req.params;
  const result = await saleService.updateById(id, sales);

  if (result.type) {
    return res.status(result.type).json({ message: result.message });
  }
  return res.status(200).json(result.message);
};

const deleteById = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await saleService.deleteById(id);
  if (type) return res.status(type).json({ message });
  return res.status(204).json(message);
};

module.exports = {
  allSales,
  salesById,
  insertSale,
  updateById,
  deleteById,
};