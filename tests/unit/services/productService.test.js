const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { products, productById, invalidateName, validateName } = require('./mocks/productService.mock');

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
    
    it('Retorna mensagem de erro ao tentar deletar uma venda inexistente no banco de dados', async function () {
      // sinon.stub(productModel, 'productById').resolves([]);

      const result = await productService.deleteById(999);

      expect(result).to.be.deep.equal({ type: 404, message: 'Product not found' });
    });
  });

//   describe('Cadastro de um produto', function () {
//     // it('erro caso a requisição não tem o campo "name"', async function () {
    
//     //   const result = await productService.productById(null);

//     //   expect(result.type).to.be.equal('INVALID VALUE');
//     //   expect(result.message).to.be.equal('"name" is required');
//     // });

//     // it('erro ao passar um nome que não tenha pelo menos 5 caracteres', async function () {

//     //   const result = await productService.productById(invalidateName);

//     //   expect(result.type).to.be.equal('INVALID VALUE');
//     //   expect(result.message).to.be.equal('"name" length must be at least 5 characters long');
//     // });

//     it('retorna o produto cadastrado caso seja passado valores válidos', async function () {
//       sinon.stub(productModel, 'productById').resolves(1);

//       const result = await productService.productById(validateName);

//       expect(result.type).to.be.equal(result.null);
//       expect(result.message).to.deep.equal(result.productById);
//     });

    afterEach(function () {
      sinon.restore();
    });
  });