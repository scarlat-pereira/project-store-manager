const Joi = require('joi');

const idSchema = Joi.required();
const saleSchema = Joi.object({
  productId: Joi.required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = {
  idSchema,
  saleSchema,
};