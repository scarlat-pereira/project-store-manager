const camelize = require('camelize');
const connection = require('./connection');

// const insertSale = async () => {
//   const [{ insertId }] = await connection.execute(
//     'INSERT INTO StorageManager.sales (id, date) VALUES (default, default)', [],
//   );
//   return insertId;
// };

// const insertSaleProduct = async (saleId, productId, quantity) => {
//   const [result] = await connection.execute(
//     'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
//     [saleId, productId, quantity],
//   );
//   return camelize(result);
// };

// const findProductId = async (id) => {
//   const [result] = await connection.execute(`
//   SELECT product_id FROM StoreManager.sale_products WHERE product_id = ?`, [id]);
//   return result;
// };

const allSales = async () => {
   const [result] = await connection.execute(
    `
      SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
      FROM StoreManager.sales AS s
      INNER JOIN StoreManager.sales_products AS sp
      ON sp.sale_id = s.id
    `,
   );
  return camelize(result);
};

const salesById = async (id) => {
  const [result] = await connection.execute(
    `
      SELECT s.date, sp.product_id, sp.quantity
      FROM StoreManager.sales AS s
      INNER JOIN StoreManager.sales_products AS sp
      ON sp.sale_id = s.id
      WHERE sp.sale_id = ?
      ORDER BY sp.sale_id ASC, sp.product_id  ASC
      `,

    [id],
  );
  return camelize(result);
};

module.exports = {
  // insertSale,
  // insertSaleProduct,
  // findProductId,
  allSales,
  salesById,
};