const { expect } = require('chai');
const sinon = require('sinon');
const { saleModel } = require('../../../src/models');
const conn = require('../../../src/models/connection');
const { sales, saleById, saleMock } = require('./mocks/sales.model.mock');

describe('Testes unitários da camada Model', function () {
  it('Recuperando a lista de vendas', async function () {
    // Arrange
    sinon.stub(conn, 'execute').resolves([sales]);
    // Act
    const result = await saleModel.allSales();
    // Assert
    expect(result).to.be.deep.equal(sales);
  });

  it('Recuperando uma venda a partir do seu ID', async function () {
    sinon.stub(conn, 'execute').resolves([saleById]);
    const result = await saleModel.salesById(1);

    expect(result).to.be.deep.equal(saleById);
  });

  it('Cadastra uma nova venda', async function () {
    sinon.stub(conn, 'execute').resolves([{ insertId: 1}]);

    const result = await saleModel.insertSale();
    expect(result).to.be.deep.equal(1);
  });

  it('Cadastra as informações da nova venda', async function () {
    sinon.stub(conn, 'execute').resolves({ productId: 1, quantity: 10 });

    const resultSale = await saleModel.insertSaleProduct(1, saleMock)
    expect(resultSale).to.be.deep.equal({ productId: 1, quantity: 10 });
  });

  it('É possível deletar uma venda existente no banco de dados', async function () {
    sinon.stub(conn, 'execute').resolves(undefined);
      
    const result = await saleModel.deleteById(1);
      
    expect(result).to.be.equal(undefined);
  });

    afterEach(function () {
    sinon.restore();
  });
});