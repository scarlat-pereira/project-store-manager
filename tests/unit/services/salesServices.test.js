const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const conn = require('../../../src/models/connection');
const { sales, saleById, invalidProductId, invalidQuantity, quantityRequired, response, validateCorrect } = require('./mocks/sales.service.mock');

describe('Testes unitários da camada service', function () {
  describe('Listagem de Vendas', function () {
    it('Retorna a lista de todas as vendas', async function () {
      // arrange
      sinon.stub(saleModel, 'allSales').resolves(sales);
      // act
      const result = await saleService.allSales();
      // assert
      expect(result.type).to.be.equal(result.null);
      expect(result.message).to.deep.equal([result.message][0]);
    });

    it('Retorna a venda caso o ID exista', async function () {
      sinon.stub(saleModel, 'salesById').resolves([saleById]);

      const result = await saleService.salesById(2);

      expect(result.type).to.be.equal(null);

      expect(result.message).to.deep.equal(result.message);
    });

    it('Cadastrar uma venda', async function () {
      sinon.stub(conn, 'execute').resolves([[sales[0]]])
      const result = await saleService.insertSale([
        {
        productId: 1,
        quantity: 20,
      },
    ]);
    expect(result.type).to.equal(null);
    expect(result.message).to.be.deep.equal({
      id: undefined,
      itemsSold: [
        {
          productId: 1,
          quantity: 20,
        },
      ],
    });
  });

    it('Retorna mensagem de erro ao tentar cadastrar uma venda com o quantity com valor inválido', async function () {
      const result = await saleService.insertSale(invalidQuantity);

      expect(result.type).to.equal(422);
      expect(result.message).to.equal('"quantity" must be greater than or equal to 1');
    });

    it('Retorna mensagem de erro ao tentar cadastrar uma venda sem o quantity', async function () {
      const result = await saleService.insertSale(quantityRequired);

      expect(result.type).to.equal(400);
      expect(result.message).to.equal('"quantity" must be a number');
    });

     it('Retorna mensagem de erro ao tentar cadastrar uma venda sem o productId', async function () {
      const result = await saleService.insertSale(invalidProductId);

      expect(result.type).to.equal(404);
      expect(result.message).to.equal('Product not found');
     });
    
    it('É possível deletar uma venda que esteja cadastrada no banco de dados', async function () {
      sinon.stub(saleModel, 'salesById').resolves([sales[0]]);
      sinon.stub(saleModel, 'deleteById').resolves(undefined);
       
      const result = await saleService.deleteById(1);
       
      expect(result).to.deep.equal({ type: null, message: '' });
    });

    it('Retorna mensagem de erro ao tentar deletar uma venda inexistente no banco de dados', async function () {
      sinon.stub(saleModel, 'salesById').resolves([]);

      const result = await saleService.deleteById(999);

      expect(result).to.be.deep.equal({ type: 404, message: 'Sale not found' });
    });
    

    afterEach(function () {
      sinon.restore();
    });
  });
});