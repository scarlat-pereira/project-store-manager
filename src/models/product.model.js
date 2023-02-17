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

const updateById = async (id, name) => {
  await conn.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
    return { id, name };
};

const deleteById = async (id) => {
await conn.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
};

module.exports = {
  allProducts,
  productById,  
  createProduct,
  updateById,
  deleteById,
};