const products = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
]

const validateName = 'Martelo de Thor'

const productById = {
  id : 1,
  name: validateName,
}

const invalidateName = 'abc';

module.exports = {
  products,
  productById,
  invalidateName,
  validateName,
};