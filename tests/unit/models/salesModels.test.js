const { expect } = require('chai');
const sinon = require('sinon');
const { saleModel } = require('../../../src/models');
const conn = require('../../../src/models/connection');
const { sales, saleById } = require('./mocks/sales.model.mock');

describe('Testes unitários da camada Model', function () {
  it('Recuperando a lista de todos os sales', async function () {
    // Arrange
    sinon.stub(conn, 'execute').resolves([sales]);
    // Act
    const result = await saleModel.allSales();
    // Assert
    expect(result).to.be.deep.equal(sales);
  });
  it('Recuperando uma sale pelo seu ID', async function () {
    sinon.stub(conn, 'execute').resolves([saleById]);
    const sale = await saleModel.salesById(1);

    expect(sale).to.be.deep.equal(saleById);
  });

    afterEach(function () {
    sinon.restore();
  });
});