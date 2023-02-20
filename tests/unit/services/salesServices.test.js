const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const { sales, saleById } = require('./mocks/sales.service.mock');

describe('Testes unitários da camada service', function () {
  describe('Listagem de Sales', function () {
    it('Recuperando a lista de todos os sales', async function () {
      // arrange
      sinon.stub(saleModel, 'allSales').resolves(sales);  
      // act
      const result = await saleService.allSales();
      // assert
      expect(result.type).to.be.equal(result.null);
      expect(result.message).to.deep.equal([result.message][0]);
    });
    it('Recuperando um produto pelo seu ID', async function () {
      sinon.stub(saleModel, 'salesById').resolves([saleById]);

      const result = await saleService.salesById(2);

      expect(result.type).to.be.equal(null);

      expect(result.message).to.deep.equal(result.message);
    });
  });

   afterEach(function () {
     sinon.restore();
   });
 });