const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { products } = require('./mocks/product.model.mock');

describe('Testes unitários da camada Model', function () {
  it('Recuperando a lista de todos os produtos cadastrados', async function () {
    // Arrange
  sinon.stub(connection, 'execute').resolves([products]);
  // Act
  const result = await productModel.allProducts();
  // Assert
  expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto pelo seu ID', async function () { 
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const product = await productModel.productById(1);

    expect(product).to.be.deep.equal(products[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});