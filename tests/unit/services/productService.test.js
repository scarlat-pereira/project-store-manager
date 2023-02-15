const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { products } = require('./mocks/productService.mock');

describe('Testes unitários da camada service', function () {
  describe('Listagem de Produtos', function () {
    it('Recuperando a lista de todos os produtos cadastrados', async function () {
      // arrange
      sinon.stub(productModel, 'allProducts').resolves(products);

      // act
      const  result  = await productService.allProducts();

      // assert
      expect(result.type).to.be.equal(result.null);
      expect(result.message).to.deep.equal([result.message][0]);
    });
    it('Recuperando um produto pelo seu ID', async function () {
    sinon.stub(productModel, 'productById').resolves([products[1]]);

    const result = await productService.productById(2);

    expect(result.type).to.be.equal(result.null);

    expect(result.message).to.deep.equal(result.message);
  });
  });

   afterEach(function () {
     sinon.restore();
   });
 });

