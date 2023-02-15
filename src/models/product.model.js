const conn = require('./connection');

const allProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products');
  return result;
};

const productById = async (id) => {
  const [[product]] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return product;
};

const createProduct = async (name) => {
    const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?);',
    [...Object.values(name)],
    );
      return insertId;
};

module.exports = {
  allProducts,
  productById,  
  createProduct,

};