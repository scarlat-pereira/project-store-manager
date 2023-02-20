const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);
const { saleService } = require('../../../src/services');
const { saleControler } = require('../../../src/controllers');
const {  sales, saleById } = require('./mocks/sales.controller.mock');

describe('Testes unitários da camada Controller', function () {
  describe('Listando as sales', function() {
    it('Recuperando a lista de todas as sales', async function () {
      // arrange
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'allSales')
        .resolves({ sales });
      // act
      await saleControler.allSales(req, res);
      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([sales][1]);
    });
    it('Retorna erro caso o ID do produto não exista', async function () {
      const res = {};
      const req = {
        params: { id: 4 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
        sinon
          .stub(saleService, 'salesById')
          .resolves({ type: 'INVALID_VALUE', message: 'Product not found' });

      await saleControler.salesById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
    it('Recuperando um produto pelo seu ID', async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'salesById')
        .resolves(saleById);

      const result = await saleControler.salesById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(result);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});