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
      const result = await productService.allProducts();

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

      it('Retorna erro caso o ID do produto não exista', async function () {
      sinon.stub(productModel, 'productById').resolves(undefined);

      const result = await productService.productById(999);

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('Product not found');
      });
    
      it('É possível deletar um produto que esteja cadastrado no banco de dados', async function () {
      sinon.stub(productModel, 'productById').resolves([products[0]]);
      sinon.stub(productModel, 'deleteById').resolves(undefined);
       
      const result = await productService.deleteById(1);
       
      expect(result).to.deep.equal({ type: null, message: '' });
      });
    
      it('Retorna mensagem de erro ao tentar deletar um produto inexistente no banco de dados', async function () {

      const result = await productService.deleteById(999);

      expect(result).to.be.deep.equal({ type: 404, message: 'Product not found' });
    });
  });

    afterEach(function () {
      sinon.restore();
    });
  });